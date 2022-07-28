import './style.css';

import { of, map, timer, Observable } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

timer(0, 1000)
  .pipe(map(() => new Date().toLocaleTimeString()))
  .subscribe(console.log);

// Open the console in the bottom right to see results.
