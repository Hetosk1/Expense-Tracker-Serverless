import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const expenseRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string
    },
    Variables: {
        userId: string
    }
}>();

expenseRoutes.get('/', async (c) => {
    return c.text('Welcome the the expense routes');
});

expenseRoutes.post('/', async (c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
        
        const payload = await c.req.json();
        const userId = c.get('userId');
        
        if(!payload){
            return c.json({
                "Message": "Payload not found"
            })
        }
        console.log('welcome to the expense route');

        const expense = await prisma.expense.create({
            data: {
                userId: userId,
                name: payload.name,
                amount: payload.amount,
            }
        });

        return c.json({
            "Message": "Expense entry made"
        });
    } catch(e){
        return c.json({e});
    }
});

expenseRoutes.put('/:id', async (c) => {
    try{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const expenseId = c.req.param('id');
    const userId = c.get("userId");
    const payload = await c.req.json();

    prisma.expense.update({
        where: {
            userId:userId,
            id: expenseId
        },
        data: {
            name: payload.name,
            amount: payload.amount
        }
    });

    return c.json({
        "Message": "Expense updated",
        data: {
            payload
        }
    });

    } catch(e){
        return c.json({e});
    }
});

expenseRoutes.get('/bulk', async (c) => {});

expenseRoutes.get('/:id', async (c) => {});

expenseRoutes.delete('/:id', async (c) => {});