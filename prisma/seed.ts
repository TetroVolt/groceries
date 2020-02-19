
import { prisma } from '../src/generated/prisma-client'

// TODO: better seed data
async function main() {
  await prisma.createUser({
    email: 'john@example.com',
    name: 'John'
  });
  await prisma.createUser({
    email: 'jane@example.com',
    name: 'Jane'
  });
  const category = await prisma.createGroceryCategory({
    name: 'Eggs',
    units: 'eggs'
  });
  const item = await prisma.createGroceryItem({
    name: 'GV Large Dozen Eggs',
    count: 5,
  });
}

main().catch(e => console.error(e))