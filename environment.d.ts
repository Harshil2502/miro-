
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
     
      NEXT_PUBLIC_CONVEX_URL: string;

     
      NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY: string;
      NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY: string;
    }
  }
}
