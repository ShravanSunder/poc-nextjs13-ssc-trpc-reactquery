'use client';

import 'client-only';

import { QueryClientProvider } from '@tanstack/react-query';
import { FC, FunctionComponent, ReactNode } from 'react';

import { appQueryClient, appQueryContext } from '~~/helpers/appQueryClient';
import { trpc, trpcClient } from '~~/helpers/trpcClient';

export const ClientWrappers: FC<{ children: ReactNode }> = (props) => {

  return (
    <trpc.Provider client={trpcClient} queryClient={appQueryClient}>
      <QueryClientProvider client={appQueryClient} context={appQueryContext}>
        {/* hydrate allows options.context, but the typing does'nt support it */}
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export const withClientWrappers = <T extends Record<string, any> | never>(Child: FunctionComponent<T>) => {
  return (props: T): JSX.Element => {
    return (
      <ClientWrappers>
        <Child {...props}></Child>
      </ClientWrappers>
    );
  };
};
