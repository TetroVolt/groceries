# Groceries App Typescript converstion
Uses prisma.io

Following this example
https://github.com/prisma/prisma-examples/tree/master/typescript/graphql

This repo is a fork from https://github.com/conrad760/groceries

## Development Instructions:

### Step 1: Start the prisma server
Run `docker-compose -f docker_configs/docker-compose.yml up` to start the prisma server.

### Step 2: (Optional) Generate the prisma client
Run `yarn prisma:generate` to generate the client library if needed and it will generate the client based on
where prisma/prisma.yml specifies. In this case in src/generated/prisma-client

### Step 4: Prisma Deploy
Run `yarn prisma:deploy` to deploy the server.

### Step 5: Start:Dev
Run either `yarn start:dev` or `yarn start:ts` to start the server.
