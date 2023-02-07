import { ScaleContainer } from '../../../shared';
import classes from './Gitlab.module.scss';

export default function Gitlab() {
  return (
    <ScaleContainer
      id='gitlab'
      title='GitLab'
      showTitleAlways
      isMinimized={true}
      classMin={classes.minimized}
      classMax={classes.maximized}
    >
      <div>
        <h1>Gitlab</h1>
      </div>
    </ScaleContainer>
  );
}
