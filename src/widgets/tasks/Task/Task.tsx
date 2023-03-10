import { ifTrue, makeMatch } from '@mv-d/toolbelt';
import { clsx } from 'clsx';

import { Icon } from '../../../shared';
import { TaskItem } from '../tasks.types';
import classes from './Task.module.scss';

interface TaskProps {
  task: TaskItem;
}

const MATCH_PRIORITY_ICON = makeMatch({ low: 'low', high: 'high' }, 'medium');

// const MATCH_STATUS_ICON = makeMatch({ completed: 'checked', 'in-progress': 'semiChecked' }, 'unchecked');

export function Task({ task }: TaskProps) {
  return (
    <div
      className={clsx(classes.container, {
        [classes.completed]: task.status === 'completed',
        [classes['in-progress']]: task.status === 'in-progress',
      })}
    >
      <div className={classes.row}>
        <h1 className={classes.title}>{task.title}</h1>
        {/* <div className={classes.priority}>
          <Icon icon={MATCH_PRIORITY_ICON[task.priority]} className={classes['priority-icon']} />
        </div> */}
        <p className={classes.status}>{task.status}</p>
      </div>
      {ifTrue(task.note, () => (
        <p className={classes.note}>{task.note}</p>
      ))}
    </div>
  );
}
