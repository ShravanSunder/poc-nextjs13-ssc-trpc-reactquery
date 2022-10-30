'use client';

import { FC } from 'react';

import { appQueryContext } from '~~/helpers/appQueryClient';
import { trpc } from '~~/helpers/trpcClient';
import { withClientWrappers } from '~~/helpers/WithClientWrappers';

const Component: FC = (_props) => {
  console.log('component');
  const hello = trpc.getHelloById.useQuery('this is a second component', { context: appQueryContext });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{hello.data?.name}</p>
    </div>
  );
};

export const TestComponent2 = withClientWrappers(Component);

// export const TestComponent: FC = () => (
//   <ClientWrappers>
//     <Component></Component>
//   </ClientWrappers>
// );
