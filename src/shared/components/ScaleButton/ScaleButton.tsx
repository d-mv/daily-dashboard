import { Icon } from '../Icon';
import classes from './ScaleButton.module.scss';

interface ScaleButtonProps {
  onClick: () => void;
  isMinimized: boolean;
}

export function ScaleButton({ onClick, isMinimized }: ScaleButtonProps) {
  return (
    <button id='scale-button' className={classes.container} onClick={onClick}>
      <Icon icon={isMinimized ? 'maximize' : 'minimize'} className={classes.icon} />
    </button>
  );
}
