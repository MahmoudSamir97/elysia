import { Elysia, t } from "elysia";
import { plugin } from "./plugin";
import { signinDTO } from "./models";

const app = new Elysia()
  .use(plugin)
  .state({
    id: 1,
    email: "mahmoud@123.com",
  })
  .decorate("getData", () => Date.now())
  .get("/", () => "Hello Elysia 😍")
  .get("/tracks", () => {
    return {
      data: ["ATM", "Credit card", "zombie"],
    };
  })
  .get("/post/:id", ({ params: { id } }) => {
    return { id, title: "Hello from start" };
  })
  .post("post", ({ body, set, store }) => {
    console.log(store);
    console.log(store["plugin-version"]);
    set.status = 201;
    return { body };
  });

app
  .group("user", (app) => {
    return app.post("signin", ({ body }) => body, {
      body: signinDTO,
      response: signinDTO,
    });
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
