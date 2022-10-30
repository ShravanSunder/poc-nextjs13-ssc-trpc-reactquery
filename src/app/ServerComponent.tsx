import { ReactNode } from 'react';
import { trpc, trpcClient } from '~~/helpers/trpcClient';
import { serverQuery } from '~~/helpers/trpcHelpers';

type FCServer<P = Record<string, any> | never> = (props: P) => Promise<ReactNode>;

const getPosts = async (): Promise<string> => {
  return Promise.resolve('I got this on the server');
};

const otherData = async () => {
  return await serverQuery.getHelloById('This is trpc data');
};



export const ServerComponent: FCServer = async () => {
  const data = await getPosts();
  const data2 = await otherData();

  return (
    <>
      <div>-------</div>
      <div>This is a server component</div>
      <span>This is my data: </span>
      <span>{data}</span>
      <div></div>
       <span>This is a server query with trpc: </span>
      <span>{data2.name}</span> 
      <div>-------</div>
    </>
  );
};
