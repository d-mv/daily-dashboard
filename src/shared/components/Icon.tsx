import { CSSProperties, PropsWithoutRef } from 'react';
import { BsBoxArrowInDownLeft, BsBoxArrowInUpRight } from 'react-icons/bs';
import { BiCheckbox, BiCheckboxChecked, BiCheckboxMinus, BiCheckboxSquare } from 'react-icons/bi';
import { RxDoubleArrowUp, RxArrowDown } from 'react-icons/rx';
import { makeMatch } from '@mv-d/toolbelt';

export const Icons = makeMatch(
  {
    minimize: BsBoxArrowInDownLeft,
    maximize: BsBoxArrowInUpRight,
    checked: BiCheckboxChecked,
    semiChecked: BiCheckboxMinus,
    fullChecked: BiCheckboxSquare,
    unchecked: BiCheckbox,
    high: RxDoubleArrowUp,
    low: RxArrowDown,
  },
  () => <div />,
);

export interface IconProps {
  icon: keyof typeof Icons;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export function Icon({ icon, className, style, id }: PropsWithoutRef<IconProps>) {
  const Icon = Icons[icon];

  return <Icon id={id} className={className} style={style} />;
}
