import { ReactNode } from 'react';

type FCServer<P = Record<string, any> | never> = (props: P) => Promise<ReactNode>;

const getPosts = async (): Promise<string> => {
  return Promise.resolve('I got this on the server');
};

export const ServerComponent: FCServer = async () => {
  const data = await getPosts();

  return (
    <>
      <div>-------</div>
      <div>This is a server component</div>
      <span>This is my data: </span>
      <span>{data}</span>
      <div>-------</div>
    </>
  );
};
