import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

userRoutes.get('/', async (c) => {
    return c.text("welcome to the users routes");
});

userRoutes.post('/signup', async (c) => {

    try{ 
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const payload = await c.req.json();

        if(!payload){
            return c.json({
                Message: "Payload not found"
            });
        } else {
        const user = await prisma.user.create({
                data: {
                    username: payload.username || "",
                    email: payload.email || "",
                    password: payload.password|| ""
                }
            });

            return c.json({
                "Message": "User Entry Successfull"
            });
         }
    } catch (e) {
        return c.json({
            "Error": {e}
        })
    }
});

userRoutes.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const payload = await c.req.json();

    if(!payload){
        return c.json({
            "Error": "Payload not found"
        });
    } else {
        const user = await prisma.user.findUnique({
            where: {
                email: payload.email,
                password: payload.password
            }
        });

        if(user){
            const token = await sign({
                id: user.id
            }, c.env.JWT_SECRET);

            return c.json({
                "Token": {token}
            });
        } else {
            return c.json({
                "Message": "Invalid Credentials, access denied"
            });
        }
    }
});