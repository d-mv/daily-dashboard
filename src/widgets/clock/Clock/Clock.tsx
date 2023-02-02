import { Optional } from '@mv-d/toolbelt';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { Icon } from '../../../shared';
import { ClockItem } from '../ClockItem';
import classes from './Clock.module.scss';

export function Clock() {
  const [time, setTime] = useState<Optional<Date>>();

  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleScaleDown() {
    setMinimized(state => !state);
  }

  return (
    <div className={clsx(classes.container, { [classes.minimized]: minimized })}>
      <ClockItem digits={String(time?.getHours() || 0)} />
      <div className={classes.separator} />
      <ClockItem digits={String(time?.getMinutes() || 0)} />
      <div className={classes.separator} />
      <ClockItem digits={String(time?.getSeconds() || 0)} />
      <button className={classes.button} onClick={handleScaleDown}>
        <Icon icon={minimized ? 'maximize' : 'minimize'} className={classes.icon} />
      </button>
    </div>
  );
}
