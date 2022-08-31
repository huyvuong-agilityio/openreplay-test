// Libraries
import Tracker, { Options } from "@openreplay/tracker";
import { v4 as uuidV4 } from "uuid";
export interface IOpenReplayConfig extends Options {
  projectKey: string;
}

export interface IPayload {
  name: string;
  data: any;
}

export type ReportError = Error | PromiseRejectedResult | ErrorEvent;

export interface IOpenReplayAction {
  type: string;
  payload?: IPayload | ReportError | string;
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
      const { name, data } = action.payload as IPayload;
      state.tracker?.event(name, data);
      return state;
    }
    case "logIssue": {
      const { name, data } = action.payload as IPayload;
      state.tracker?.issue(name, data);
      return state;
    }
    case "reportError": {
      const error = action.payload as ReportError;
      state.tracker?.handleError(error);
      return state;
    }
  }
};

export default openReplayReducer;
