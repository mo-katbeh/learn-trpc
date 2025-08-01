import { adminProcedure, t } from "../trpc";
import { userRouter } from "./users";

export const appRouter = t.router({
    sayHi: t.procedure.query(()=>{
        return "Hi"
    }),
    logToServer: t.procedure.input(v=>{
        if (typeof v === 'string') return v
        throw new Error("Invalid type")
    }).mutation(req=>{
        console.log(`client says: ${req.input}`);
        return true
    }),
    secretData: adminProcedure.query(({ctx})=>{
        console.log(ctx.user)
        return "Secret Data!!!"
    }),
    users: userRouter,

})

// export const mergedRouter = t.mergeRouters(appRouter, userRouter)