// Libraries
import { App } from "@openreplay/tracker";
import { createContext } from "react";
import { IPayload } from "./reducer";

interface ITrackerContext {
  startTracking: () => void;
  initTracker: () => void;
  logEvent: (evnt: IPayload) => void;
  logIssue: (evnt: IPayload) => void;
  profiler: (name: string) => (fn: Function, thisArg?: any) => any;
}

const TrackerContext = createContext<ITrackerContext>({
  startTracking: () => {},
  initTracker: () => {},
  logEvent: () => {},
  logIssue: () => {},
  profiler: () => () => {},
});

export default TrackerContext;
