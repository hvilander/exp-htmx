import {type Context, Hono} from 'hono';
import { serveStatic } from 'hono/bun';

const app = new Hono();

console.log("Bun server starting...");

// Serve static files from public directory
app.use('/*', serveStatic({root: './public'}));

app.get('/version', (c: Context) => {
  //return a response whose body contains the bun version
  return c.text('v' + Bun.version);
});

export default app;
