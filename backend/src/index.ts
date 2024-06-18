import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  };
  Variables:{
    userId:string
  }
}>();

app.use("/*",cors());

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);



app.get("/", (c) => {
  return c.text("Hello Hono!");
});




export default app;

//&postgres://avnadmin:AVNS_WkcwJKCL1Fs3usB5Iva@pg-164b3546-dheerain2004-0dfb.a.aivencloud.com:22286/defaultdb?sslmode=require

//*DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMzY4OTEwYjUtYzFlYy00NTNlLWFmMjItYTBiYzA1NWVhMjYxIiwidGVuYW50X2lkIjoiNGQ3ZDViY2E0OGJiYzNiNmRiZWI0YzJhODIwMDMwNjVlMjczNWQ0MjJmN2JkNDYyZDZjMzYyZTNkY2U4MGM5MiIsImludGVybmFsX3NlY3JldCI6IjAwOGZlY2RmLTk4NDEtNDRmMi05NzNiLTIyNjIxOTg5NGI1OSJ9.4rNqUKSKXtRLpjWe4XiIsha0INUjt27VI4Jzza6YMsg"
