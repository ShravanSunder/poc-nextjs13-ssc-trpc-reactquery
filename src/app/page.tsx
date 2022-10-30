import { FC } from 'react';

import styles from './page.module.css';

import { ServerComponent } from '~~/app/ServerComponent';
import { TestComponent } from '~~/app/TestComponent.client';
import { TestComponent2 } from '~~/app/TestComponent2.client';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={'text-sm'}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </p>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          {/* @ts-ignore: ts async jsx error*/}
          <ServerComponent></ServerComponent>
        </div>

        <div className={styles.grid}>
          <TestComponent></TestComponent>
        </div>

        <div className={styles.grid}>
          <TestComponent2></TestComponent2>
        </div>
      </main>
    </div>
  );
};

export default Home;
