// Clerk configuration
// Get your publishable key from https://dashboard.clerk.com
export const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

// Enable app to run without Clerk when key is missing or invalid
export const CLERK_ENABLED =
  typeof CLERK_PUBLISHABLE_KEY === "string" &&
  /^pk_(test|live)_[A-Za-z0-9]+/.test(CLERK_PUBLISHABLE_KEY);
