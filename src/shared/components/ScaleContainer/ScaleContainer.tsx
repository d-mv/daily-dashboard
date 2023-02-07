import { ifTrue } from '@mv-d/toolbelt';
import { clsx } from 'clsx';
import { assoc, isNil } from 'ramda';
import { PropsWithChildren, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ScaleButton } from '../..';
import { Title } from '../Title';
import classes from './ScaleContainer.module.scss';
import { scaleContainerState } from './scaleContainer.state';

interface ScaleContainerProps {
  isMinimized?: boolean;
  showTitleAlways?: boolean;
  title?: string;
  id: string;
  classMax: string;
  classMin: string;
}

export function ScaleContainer({
  children,
  isMinimized,
  showTitleAlways,
  title,
  id,
  classMax,
  classMin,
}: PropsWithChildren<ScaleContainerProps>) {
  const [minimized, setMinimized] = useRecoilState(scaleContainerState);

  useEffect(() => {
    setMinimized(state => assoc(id, isNil(isMinimized) ? false : isMinimized, state));
  }, [id, isMinimized, setMinimized]);

  function toggleScale() {
    setMinimized(state => assoc(id, !state[id], state));
  }

  function getShowTitle() {
    if (!title) return false;

    if (showTitleAlways) return true;

    if (minimized) return true;

    return false;
  }

  return (
    <div className={clsx(classes.container, ifTrue(minimized[id], classMin, classMax))}>
      {ifTrue(getShowTitle(), () => (
        <Title>{title}</Title>
      ))}
      {children}
      <ScaleButton id={id} isMinimized={minimized[id]} onClick={toggleScale} />
    </div>
  );
}
