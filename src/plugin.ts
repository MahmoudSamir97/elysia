import { Elysia } from "elysia";

// DEFINE PLUGIN: reusable components
export const plugin = new Elysia()
  .state("plugin-version", 1)
  .get("form-plugin", () => "Hi")
  .get("greet", () => "Welcome every body !");
