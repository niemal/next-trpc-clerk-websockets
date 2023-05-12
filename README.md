# next-trpc-clerk-websockets

This is a repository reproducing a specific bug with the middleware and `getAuth()` function when combined with websockets.

Steps to reproduce:

1. Clone the repository.
2. Add a `.env` file with the clerk variables and `pnpm install`
3. Fire up the your browser and type `http://localhost:3000/` but do not hit enter yet.
4. Open your developer tools of that page and have the Network tab ready.
5. `pnpm run dev`
6. Quickly inspect the waterfall of websocket exchanges with the error message **{"id":null,"error":{"json":{"message":"You need to use \"authMiddleware\" (or the deprecated \"withClerkMiddleware\") in your Next.js middleware file. You also need to make sure that your middleware matcher is configured correctly and matches this route or page. See https://clerk.com/docs/quickstarts/get-started-with-nextjs"**
