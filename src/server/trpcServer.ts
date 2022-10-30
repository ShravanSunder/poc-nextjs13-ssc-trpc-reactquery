import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();
// Base router and procedure helpers

export const router = t.router;
export const publicProcedure = t.procedure;

/**
 * Reusable middleware that checks if users are authenticated.
 * @note Example only, yours may vary depending on how your auth is setup
 **/
// const isAuthed = t.middleware(({ next, ctx }) => {
//   if (!ctx.session?.user?.email) {
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//     });
//   }
//   return next({
//     ctx: {
//       // Infers the `session` as non-nullable
//       session: ctx.session,
//     },
//   });
// });

// // Protected procedures for logged in users only
// export const protectedProcedure = t.procedure.use(isAuthed);
