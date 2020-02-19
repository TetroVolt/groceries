import { GraphQLServer } from 'graphql-yoga';
import { idArg, queryType, stringArg, floatArg } from 'nexus';

import * as path from 'path';
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma';
import datamodelInfo from './generated/nexus-prisma';
import { prisma } from './generated/prisma-client';

const GroceryItem = prismaObjectType({
  name: 'GroceryItem',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const GroceryCategory = prismaObjectType({
  name: 'GroceryCategory',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const Query = queryType({
  definition(t) {
    t.list.field('categories', {
      type: 'GroceryCategory',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.groceryCategories();
      },
    })

    t.list.field('categoryItems', {
      type: 'GroceryItem',
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.groceryItems({
          where: { id }
        });
      },
    })
  },
})

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.field('createCategory', {
      type: 'GroceryCategory',
      args: {
        name: stringArg(),
        description: stringArg({ nullable: true }),
        units: stringArg({ nullable: true }),
      },
      resolve: (parent, { name, description, units }, ctx) => {
        return ctx.prisma.createGroceryCategory({
          name,
          description,
          units
        });
      },
    });

    t.field('createItem', {
      type: 'GroceryItem',
      args: {
        name: stringArg(),
        count: floatArg({ required: false }),
        expiration: stringArg({ required: false }),
        UPC: stringArg({ required: false }),
        category: idArg({ required: false })
      },
      resolve: (parent, args, ctx) => {
        return ctx.prisma.createGroceryItem(args);
      },
    });
  },
})

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [Query, Mutation, GroceryItem, GroceryCategory],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
})

const server = new GraphQLServer({
  schema,
  context: { prisma },
})

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`))