import { useRecoilValue } from 'recoil';

import { ScaleContainer } from '../../../shared';
import classes from './Tasks.module.scss';
import { tasksState } from '../tasks.state';
import { TaskItem } from '../tasks.types';
import { Task } from '../Task';

export default function Tasks() {
  const tasks = useRecoilValue(tasksState);

  function renderTaskItem(task: TaskItem) {
    return <Task task={task} key={task.id} />;
  }

  return (
    <ScaleContainer
      id='tasks'
      isMinimized={true}
      showTitleAlways
      title='Tasks'
      classMax={classes.maximized}
      classMin={classes.minimized}
    >
      <div className={classes.tasks}>{tasks.map(renderTaskItem)}</div>
    </ScaleContainer>
  );
}
