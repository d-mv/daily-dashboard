import { PropsWithChildren } from 'react';

import classes from './Title.module.scss';

export default function Title({ children }: PropsWithChildren) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{children}</h1>
    </div>
  );
}
