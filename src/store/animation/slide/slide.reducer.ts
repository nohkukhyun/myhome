import {
  slideAnimationStart,
  SLIDE_ANIMATION_START,
  slideAnimationFinish,
  SLIDE_ANIMATION_FINISH,
} from "./slide.action";

type SlideState = {
  status: boolean;
};

const initialState: SlideState = {
  status: false,
};

type SlideAction =
  | ReturnType<typeof slideAnimationStart>
  | ReturnType<typeof slideAnimationFinish>;

function slide(state: SlideState = initialState, action: SlideAction) {
  switch (action.type) {
    case SLIDE_ANIMATION_START: {
      return {
        ...state,
        status: true,
      };
    }

    case SLIDE_ANIMATION_FINISH: {
      return {
        ...state,
        status: false,
      };
    }

    default:
      return state;
  }
}

export default slide;
