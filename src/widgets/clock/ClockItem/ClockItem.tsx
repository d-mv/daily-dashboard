import { ClockDigit } from '../ClockDigit';
import classes from './ClockItem.module.scss';

interface ClockItemProps {
  digits: string;
}

export function ClockItem({ digits }: ClockItemProps) {
  return (
    <div className={classes.container}>
      <ClockDigit>{digits.length === 2 ? digits[0] : '0'}</ClockDigit>
      <ClockDigit>{digits.length === 2 ? digits[1] : digits[0]}</ClockDigit>
    </div>
  );
}
