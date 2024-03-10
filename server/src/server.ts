import { app } from './app'
import { env } from './env'

const port = env.PORT !== 0 ? env.PORT : 3333

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running! | PORT: ' + port)

  })