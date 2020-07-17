import { serve } from "https://deno.land/std/http/server.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

console.log(`Port: ${port}`);


const server = serve({ port: port });

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}