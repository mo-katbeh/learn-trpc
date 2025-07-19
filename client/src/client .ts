import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/api"
import { log } from "console";

const client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({
        url: "http://localhost:3000/trpc"
    })]
})

async function main() {
    const result = await client.sayHi.query()
    console.log(result);
    
    
}
main()