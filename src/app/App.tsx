import { LazyLoad } from '../shared';
import { Clock, Tasks } from '../widgets';
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
        </LazyLoad>
      </main>
    </div>
  );
}
