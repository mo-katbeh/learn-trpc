import { t } from "../trpc";
import { z } from "zod"

const userProd = t.procedure.input(z.object({ userId: z.string() }))
export const userRouter = t.router({
    get: userProd.query(({ input })=>{
        return { id: input.userId }
    }),
    update: userProd
    .input(z.object({ name: z.string() }))
    .output(z.object({ name: z.string(), id: z.string() }))
    .mutation(req => {
        console.log(req.ctx.isAdmin)
        console.log(`updating user ${req.input.userId} to have new name ${req.input.name}` )
    return {id: req.input.userId, name: req.input.name}
    })

})