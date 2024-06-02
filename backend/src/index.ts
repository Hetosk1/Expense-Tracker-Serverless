import { Hono } from 'hono'
import { userRoutes } from './routes/users';
import { expenseRoutes } from './routes/expenses';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { Variables } from 'hono/types';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables:Variables 
}>();

app.use('*', cors(
  {
    origin: '*',
  }
))

app.use("/expense/*", async (c, next) => {
  try{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    console.log('passed the expense route authentication middleware');
    const jwt = c.req.header("Authorization");
    if(!jwt){
      return c.json({
        "Message": "Token not found"
      });
    }
    const token = jwt.split(' ')[1];

    const payload = await verify(token, c.env.JWT_SECRET);
    if(!payload){
      return c.json({
        "Message": "Unauthorized"
      });
    }
    c.set("userId", payload.id);

    await next();
  } catch(e){
    return c.json({
      e
    });
  }

})

app.get('/', (c) => {
  return c.text('Welcome to the root directory')
})

app.route('/user', userRoutes);
app.route('/expense', expenseRoutes);

export default app
