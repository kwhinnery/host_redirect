# deploy_redirect

This is a simple Deno Deploy app that redirects requests to a different host.

It is used internally to redirect `www.deno.com` visitors to `deno.com`, and to
route `status.deno.com` visitors to `denostatus.com`.

# Configuration

The host to redirect traffic to must be specified using the `REDIRECT_HOST`
environment variable.
