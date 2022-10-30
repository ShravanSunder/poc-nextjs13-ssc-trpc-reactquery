import { MantineProvider } from '@mantine/core';
import { FC, ReactNode } from 'react';

export const CustomMantineProvider: FC<{ children: ReactNode }> = (props) => {
  return <MantineProvider>{props.children}</MantineProvider>;
};
