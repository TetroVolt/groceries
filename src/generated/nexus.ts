/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */

import * as types from "../types"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  GroceryCategory: { // root type
    description?: string | null; // String
    id: string; // ID!
    name: string; // String!
    units?: string | null; // String
  }
  GroceryItem: { // root type
    count: number; // Float!
    description?: string | null; // String
    expiration?: any | null; // DateTime
    id: string; // ID!
    name: string; // String!
    UPC?: string | null; // String
  }
  Mutation: {};
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  GroceryCategory: { // field return type
    description: string | null; // String
    id: string; // ID!
    name: string; // String!
    units: string | null; // String
  }
  GroceryItem: { // field return type
    category: NexusGenRootTypes['GroceryCategory'] | null; // GroceryCategory
    count: number; // Float!
    description: string | null; // String
    expiration: any | null; // DateTime
    id: string; // ID!
    name: string; // String!
    UPC: string | null; // String
  }
  Mutation: { // field return type
    createCategory: NexusGenRootTypes['GroceryCategory'] | null; // GroceryCategory
    createItem: NexusGenRootTypes['GroceryItem'] | null; // GroceryItem
  }
  Query: { // field return type
    categories: NexusGenRootTypes['GroceryCategory'][] | null; // [GroceryCategory!]
    categoryItems: NexusGenRootTypes['GroceryItem'][] | null; // [GroceryItem!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCategory: { // args
      description?: string | null; // String
      name?: string | null; // String
      units?: string | null; // String
    }
    createItem: { // args
      category?: string | null; // ID
      count?: number | null; // Float
      expiration?: string | null; // String
      name?: string | null; // String
      UPC?: string | null; // String
    }
  }
  Query: {
    categoryItems: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "GroceryCategory" | "GroceryItem" | "Mutation" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}