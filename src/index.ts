import "@bospieter/ws-helper/styles.css";
//@ts-ignore
import { add, initBody } from "@bospieter/ws-helper";

import { fromEvent, of, interval } from "rxjs";
import { delay, switchMap, take, tap } from "rxjs/operators";

initBody("rx-js switchMap");
add.button("Trigger", "btn");
// streams

const button = document.getElementById("btn");

var obs1 = fromEvent(button, "click");
var obs2 = interval(1000);

obs1
  .pipe(
    tap(value => console.log(value)),
    switchMap(event => {
      return obs2;
    }),
    take(15)
  )
  .subscribe(value => add.li(value));
