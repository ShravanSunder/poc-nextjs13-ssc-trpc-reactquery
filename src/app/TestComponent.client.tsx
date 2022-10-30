'use client';

import { FC } from 'react';

import { appQueryContext } from '~~/helpers/appQueryClient';
import { trpc } from '~~/helpers/trpcClient';
import { withClientWrappers } from '~~/helpers/WithClientWrappers';

const getPosts = (): Promise<string> => {
  console.log('calling fetch');
  return Promise.resolve('Get data for client component');
};

const Component: FC = (_props) => {
  // const hello = { data: 'sdfdsfsd' };
  console.log('component');
  // const hello = useQuery(['clientPosts'], getPosts, { context: appQueryContext });
  const hello = trpc.getHelloById.useQuery('test component1', { context: appQueryContext });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>---------</div>
      <p>{hello.data.name}</p>
      <div>---------</div>
    </div>
  );
};

export const TestComponent = withClientWrappers(Component);
