# Groceries App

---
Project Summary:
Money is wasted driving back and forth to the grocery store. We are trying to solve that problem by tracking what you buy and bring into your home. Consider the following scenarios:


I am going to the store and I have a recipe in mind and I know I am going to need Garlic Powder but I think I have it at home. I didn't have it at home and now the $2.33 cost an extra $3-5 in gas to go back.

I am already driving passed a grocery store so I decide to run in and grab milk. When I get home I see that I already had them in the fridge. The milk expired before I could use it all.

## Development Instructions:

### Step 1: Start the prisma server
Run `docker-compose -f docker_configs/docker-compose.yml up` to start the prisma server.

### Step 2: (Optional) Generate the prisma client
Run `prisma generate` to generate the client library if needed and it will generate the client based on
where prisma/prisma.yml specifies. In this case in src/generated/prisma-client

### Step 4: Prisma Deploy
Run `prisma deploy` to deploy the server.

### Step 5: Start:Dev
Run `yarn start:dev` for now


Goals:
Use Grocery store open API to keep track of the thing I have so I don't end up buying the same stuff a dozen times.

It should be easy to add and remove items that are bought and used.

All items should have a shelf life.

Future goals/Ideas
- Notifications when things expire
- recipe suggestions to use things before they expire
- auto grocery list
- track expenses
