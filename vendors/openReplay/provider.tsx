// Libraries
import { ReactNode } from "react";
import { useReducer } from "react";
import trackerProfiler from "@openreplay/tracker-profiler";

// OpenReplay
import TrackerContext from "./context";
import openReplayReducer, { IOpenReplayConfig, IPayload } from "./reducer";

interface TrackerProviderProps {
  children: ReactNode;
  config: Partial<IOpenReplayConfig>;
}

const TrackerProvider = ({ children, config = {} }: TrackerProviderProps) => {
  const [state, dispatch] = useReducer(openReplayReducer, {
    tracker: null,
    config,
  });
  const profiler = state.tracker?.use(trackerProfiler());
  // console.log(profiler);
  const value = {
    startTracking: () => dispatch({ type: "start" }),
    initTracker: () => dispatch({ type: "init" }),
    logEvent: (evnt: IPayload) => dispatch({ type: "logEvent", payload: evnt }),
    logIssue: (evnt: IPayload) => dispatch({ type: "logIssue", payload: evnt }),
    profiler,
  };

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  );
};

export default TrackerProvider;
