import {
  slideAnimationSuccess,
  SLIDE_ANIMATION_SUCCESS,
  slideAnimationFailure,
  SLIDE_ANIMATION_FAILURE,
} from "./slide.action";

type SlideState = {
  status: boolean;
};

const initialState: SlideState = {
  status: false,
};

type SlideAction =
  | ReturnType<typeof slideAnimationSuccess>
  | ReturnType<typeof slideAnimationFailure>;

function slide(state: SlideState = initialState, action: SlideAction) {
  switch (action.type) {
    case SLIDE_ANIMATION_SUCCESS: {
      return {
        ...state,
        status: true,
      };
    }

    case SLIDE_ANIMATION_FAILURE: {
      return {
        ...state,
        status: state.status,
      };
    }

    default:
      return state;
  }
}

export default slide;
