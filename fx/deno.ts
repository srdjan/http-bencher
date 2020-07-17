import { serve } from "https://deno.land/std/http/server.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

console.log(`Port: ${port}`);

const getData = async (path: string): Promise<any> => {
  const data = await Deno.readFile(path);
  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);
  return JSON.parse(decodedData);
};

const server = serve({ port: port });
for await (const req of server) {
  if (req.url.includes('/small')) {
    req.respond(await getData('./jsons/example1.json'));
  }
  else if (req.url.includes('/big')) {
    req.respond(await getData('./jsons/example2.json'));
  }
  else {
    req.respond({ body: "Hello World\n" });
  }
}

