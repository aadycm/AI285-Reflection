# Deploying to Vercel

The repository is already on GitHub. Connecting it to Vercel is a one-time
setup; after that, every `git push` publishes automatically.

## One-time setup

1. Go to <https://vercel.com/signup> and choose **Continue with GitHub**.
2. On the dashboard, click **Add New… → Project**.
3. Find **`AI285-Reflection`** in the repository list and click **Import**.
   - If it isn't listed, click **Adjust GitHub App Permissions** and grant
     Vercel access to that repository.
4. Vercel detects Next.js on its own. **Change nothing** — framework, build
   command and output directory are all correct by default.
5. Click **Deploy** and wait about a minute.

You'll get a live URL like `https://ai285-reflection.vercel.app`. That is the
link to submit.

## After the first deploy

Put the real URL into [`content/site.ts`](./content/site.ts) so metadata and the
sitemap point at the right place:

```ts
siteUrl: "https://your-actual-url.vercel.app",
```

Then commit and push — which also confirms that auto-deploy is working.

## Every week after that

```bash
git add .
git commit -m "Add Week 3 reflection"
git push
```

Vercel rebuilds within a minute or two. Nothing else to do.

## If the build fails

Vercel shows the error log on the deployment page. The usual cause is a typo in
a content file — a missing comma or an unclosed quote. Catch it before pushing:

```bash
npm run build
```

Note that a stray apostrophe inside a double-quoted string is fine
(`"I didn't"`), but a double quote inside one is not — use `'single quotes'`
around such text, or escape it as `\"`.

## Custom domain (optional)

Project → **Settings → Domains** in Vercel. Not needed for submission.
