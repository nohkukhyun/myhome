export const SLIDE_ANIMATION_START = "SLIDE_ANIMATION_START" as const;
export const SLIDE_ANIMATION_FINISH = "SLIDE_ANIMATION_FINISH" as const;

export const slideAnimationStart = () => ({
  type: SLIDE_ANIMATION_START,
});

export const slideAnimationFinish = () => ({
  type: SLIDE_ANIMATION_FINISH,
});
