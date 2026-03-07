import fastify from 'fastify'

const server = fastify()

type Person = {
  name: string
  age: number
  email: string
}

const people: Person[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
]

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.get('/api/task-1/people', async () => {
  return people
})

server.get('/api/task-3/time', async () => {
  const time = new Date().toLocaleTimeString('en-GB', { hour12: false })

  return { time }
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})