export const SLIDE_ANIMATION_SUCCESS = "SLIDE_ANIMATION_SUCCESS" as const;
export const SLIDE_ANIMATION_FAILURE = "SLIDE_ANIMATION_FAILURE" as const;

export const slideAnimationSuccess = () => ({
  type: SLIDE_ANIMATION_SUCCESS,
});

export const slideAnimationFailure = () => ({
  type: SLIDE_ANIMATION_FAILURE,
});
