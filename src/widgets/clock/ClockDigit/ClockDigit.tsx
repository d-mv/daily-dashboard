import { PropsWithChildren } from 'react';

import classes from './ClockDigit.module.scss';

export function ClockDigit({ children }: PropsWithChildren) {
  return (
    <div className={classes.container}>
      <p className='animate__animated animate__fadeIn'>{children}</p>
    </div>
  );
}
