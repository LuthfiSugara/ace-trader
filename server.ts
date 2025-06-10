// // server.ts
// import { createServer } from 'http'
// import { parse } from 'url'
// import next from 'next'
// import { IncomingMessage, ServerResponse } from 'http'

// const dev = process.env.NODE_ENV !== 'production'
// const hostname = 'localhost'
// const port = parseInt(process.env.PORT || '8080', 10)

// // When using middleware `hostname` and `port` must be provided
// const app = next({ dev, hostname, port })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer(async (req: IncomingMessage, res: ServerResponse) => {
//     try {
//       const parsedUrl = parse(req.url || '', true)
//       const { pathname, query } = parsedUrl

//       if (pathname === '/a') {
//         await app.render(req, res, '/a', query)
//       } else if (pathname === '/b') {
//         await app.render(req, res, '/b', query)
//       } else {
//         await handle(req, res, parsedUrl)
//       }
//     } catch (err) {
//       console.error('Error occurred handling', req?.url, err)
//       res.statusCode = 500
//       res.end('internal server error')
//     }
//   }).listen(port, () => {
//     console.log(`> Ready on http://${hostname}:${port}`)
//   })
// })
