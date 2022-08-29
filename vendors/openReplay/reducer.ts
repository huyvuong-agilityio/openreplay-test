// Libraries
import Tracker, { Options } from "@openreplay/tracker";
import { v4 as uuidV4 } from "uuid";
import trackerProfiler from "@openreplay/tracker-profiler";
export interface IOpenReplayConfig extends Options {
  projectKey: string;
}

export interface IPayload {
  name: string;
  data: any;
}

export interface IOpenReplayAction {
  type: string;
  payload?: IPayload;
}

const userId = uuidV4();

const newTracker = (config: IOpenReplayConfig) => {
  const tracker = new Tracker(config);
  tracker.setUserID(userId);
  import("@openreplay/tracker-assist").then(({ default: trackerAssist }) => {
    tracker.use(
      trackerAssist({
        callConfirm: {
          text: "Our support team wants to help you",
          confirmBtn: {
            innerHTML: "👍 Accept",
          },
          declineBtn: {
            innerHTML: "❌ Not at this moment",
          },
        },
        controlConfirm: {
          text: "Would you mind letting us control your application?",
          confirmBtn: {
            innerHTML: "👍 Accept",
          },
          declineBtn: {
            innerHTML: "❌ Not at this moment",
          },
        },
      })
    );
  });
  const profiler = tracker.use(trackerProfiler());

  const randomFn = profiler("randomFn")(() => {
    const a = Array.from({ length: 10000 }).map((a) => "11111111111111");
  });

  randomFn();

  return tracker;
};

const openReplayReducer = (state: any, action: IOpenReplayAction) => {
  switch (action.type) {
    case "init": {
      if (!state.tracker) {
        return { ...state, tracker: newTracker(state.config) };
      }
      return state;
    }
    case "start": {
      state.tracker.start();
      return state;
    }
    case "logEvent": {
      state.tracker?.event(action.payload?.name, action.payload?.data);
      return state;
    }
    case "logIssue": {
      state.tracker?.issue(action.payload?.name, action.payload?.data);
      return state;
    }
  }
};

export default openReplayReducer;
