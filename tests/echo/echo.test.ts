import echoService from "../../src/echo/index";
import { Context, HttpRequest } from "@azure/functions";

test("Expect query.name", async () => {
  const context = { log: jest.fn() } as unknown as Context;
  const request = {
    query: { name: "queryName" },
    body: { name: "hello" },
  } as unknown as HttpRequest;
  await echoService(context, request);

  expect(context.res).toEqual({ body: "queryName" });
});

test("Expect body.name", async () => {
  const context = { log: jest.fn() } as unknown as Context;
  const request = {
    query: {},
    body: { name: "Fröhn" },
  } as unknown as HttpRequest;
  await echoService(context, request);

  expect(context.res).toEqual({
    body: "Hello, Fröhn. This HTTP triggered function executed successfully.",
  });
});

test("Expect body.gumbo", async () => {
  const context = { log: jest.fn() } as unknown as Context;
  const request = {
    query: {},
    body: { gumbo: "Fröhn" },
  } as unknown as HttpRequest;
  await echoService(context, request);

  expect(context.res).toEqual({
    body: "Fröhn",
  });
});
