// -------------------------------------------------
// @filename: context.ts
// -------------------------------------------------
import { inferAsyncReturnType } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createTrpcContext = async (_opts?: trpcNext.CreateNextContextOptions): Promise<Record<string, any>> => {
  // const session = await getSession({ req: opts.req });

  // return {
  //   session,
  // };
  return Promise.resolve({});
};

export type TrpcContext = inferAsyncReturnType<typeof createTrpcContext>;
