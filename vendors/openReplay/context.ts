// Libraries
import { App } from "@openreplay/tracker";
import { createContext } from "react";
import { IPayload, ReportError } from "./reducer";

interface ITrackerContext {
  startTracking: () => void;
  initTracker: () => void;
  logEvent: (evnt: IPayload) => void;
  logIssue: (evnt: IPayload) => void;
  reportError: (error: ReportError) => void;
}

const TrackerContext = createContext<ITrackerContext>({
  startTracking: () => {},
  initTracker: () => {},
  logEvent: () => {},
  logIssue: () => {},
  reportError: () => {},
});

export default TrackerContext;
