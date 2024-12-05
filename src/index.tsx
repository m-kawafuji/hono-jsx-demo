import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";

const app = new Hono();

app.use(
  jsxRenderer(({ children, title }) => {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    );
  }),
);

app.get("/", (c) => {
  return c.render(<h1>Hono JSX</h1>, { title: "Hono JSX" });
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
