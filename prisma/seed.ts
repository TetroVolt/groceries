
import { prisma } from '../src/generated/prisma-client'

// TODO: better seed data
async function main() {
  await prisma.createUser({
    email: 'john@example.com',
    name: 'John'
  })
  await prisma.createUser({
    email: 'jane@example.com',
    name: 'Jane'
  })
}

main().catch(e => console.error(e))