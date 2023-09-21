const REDIRECT_HOST = Deno.env.get("REDIRECT_HOST");
if (!REDIRECT_HOST) {
  throw new Error("Environment variable `REDIRECT_HOST` must be set");
}

Deno.serve((req: Request) => {
  const url = new URL(req.url);
  url.host = REDIRECT_HOST;
  return Response.redirect(url);
});
