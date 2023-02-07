import { LazyLoad } from '../shared';
import { Clock, Tasks } from '../widgets';
import { Gitlab } from '../widgets/gitlab';
import classes from './App.module.scss';

export function App() {
  return (
    <div className={classes.container}>
      <aside className={classes.aside}>
        <Clock />
      </aside>
      <main className={classes.main}>
        <LazyLoad>
          <Tasks />
          <Gitlab />
        </LazyLoad>
      </main>
    </div>
  );
}
