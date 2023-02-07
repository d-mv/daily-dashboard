import { Icon } from '../Icon';
import classes from './ScaleButton.module.scss';

interface ScaleButtonProps {
  onClick: () => void;
  isMinimized: boolean;
  id: string;
}

export function ScaleButton({ onClick, isMinimized, id }: ScaleButtonProps) {
  return (
    <button
      id='scale-button'
      className={classes.container}
      onClick={onClick}
      style={{
        top: `var(--${id}-button-offset-top)`,
        right: `var(--${id}-button-offset-right)`,
      }}
    >
      <Icon
        icon={isMinimized ? 'maximize' : 'minimize'}
        className={classes.icon}
        style={{
          height: `var(--${id}-button-size)`,
          width: `var(--${id}-button-size)`,
        }}
      />
    </button>
  );
}
