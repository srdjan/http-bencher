import { serve, ServerRequest, Response } from "https://deno.land/std/http/server.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
console.log(`Port: ${port}`);

async function serveFile(req: ServerRequest, filePath: string): Promise<Response> {
  const file = await Deno.open(filePath);
  req.done.then(() => {
    file.close();
  });
  return {
    status: 200,
    body: file
  };
}

const server = serve({ port: port });

for await (const req of server) {
  let response;

  if (req.url.includes('/small')) {
    response = await serveFile(req, './jsons/example1.json');
  }
  else if (req.url.includes('/big')) {
    response = await serveFile(req, './jsons/example2.json');
  }
  else {
    req.respond({ body: "Hello World\n" });
    continue;
    // response = await serveFile(req, './jsons/hello.json');
  }

  try {
    req.respond(response!);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    break;
  }
}

