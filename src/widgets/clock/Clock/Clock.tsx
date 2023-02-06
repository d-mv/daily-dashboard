import { Optional } from '@mv-d/toolbelt';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { ScaleContainer, WithTooltip } from '../../../shared';
import { ClockItem } from '../ClockItem';
import classes from './Clock.module.scss';

export function Clock() {
  const [time, setTime] = useState<Optional<Date>>();

  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function toggleVertical() {
    setIsVertical(state => !state);
  }

  function chooseTooltip() {
    if (isVertical) return 'Toggle horizontal';
    else return 'Toggle vertical';
  }

  return (
    <ScaleContainer
      id='clock'
      classMax={classes.maximized}
      classMin={clsx(classes.minimized, { [classes['vertical-container']]: isVertical })}
    >
      <WithTooltip tooltip={chooseTooltip()}>
        <button onClick={toggleVertical} className={clsx(classes.button, { [classes.vertical]: isVertical })}>
          <ClockItem digits={String(time?.getHours() || 0)} />
          <div className={classes.separator} />
          <ClockItem digits={String(time?.getMinutes() || 0)} />
          <div className={classes.separator} />
          <ClockItem digits={String(time?.getSeconds() || 0)} />
        </button>
      </WithTooltip>
    </ScaleContainer>
  );
}
