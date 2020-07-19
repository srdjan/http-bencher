import { serve, ServerRequest, Response } from "https://deno.land/std/http/server.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
console.log(`Port: ${port}`);

async function readJson(filePath: string): Promise<string> {
  const decoder = new TextDecoder("utf-8");

  try {
    const content = decoder.decode(await Deno.readFile(filePath));
    return JSON.stringify(content);
  } catch (err) {
    err.message = `${filePath}: ${err.message}`;
    throw err;
  }
}

const server = serve({ port: port });

for await (const req of server) {
  let response: Response = {
    status: 404,
    body: "Error: Route NOT found"
  };

  if (req.url.includes('/small')) {
    response = {
      status: 200,
      body: await readJson('./jsons/example1.json')
    }
  }
  else if (req.url.includes('/big')) {
    response = {
      status: 200,
      body: await readJson('./jsons/example2.json')
    }
  }
  else {
    response = { status: 200, body: "Hello World\n" };
  }

  try {
    req.respond(response!);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    break;
  }
}

