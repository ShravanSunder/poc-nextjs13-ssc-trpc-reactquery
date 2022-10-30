// @filename: server.ts
import { z } from 'zod';

import { t } from '../trpcServer';

interface HelloTest {
  id: string;
  name: string;
}

const testData: HelloTest[] = [
  {
    id: '1',
    name: 'TRPC IS WORKINGGG!',
  },
];


export const trpcAppRouter = t.router({
  getHelloById: t.procedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;
      console.log('dfsdfsdsf', input);

      if (!!input) {
        // return the string
        console.log(input);
        return {
          id: '0',
          name: input,
        };
      }

      // if not return default data
      const user = testData[0];
      return user;
    }),
  userCreate: t.procedure.input(z.object({ name: z.string() })).mutation((req) => {
    const id = `${Math.random()}`;
    const user: HelloTest = {
      id,
      name: req.input.name,
    };
    testData.push(user);
    return user;
  }),
});

export type TrpcAppRouter = typeof trpcAppRouter;
