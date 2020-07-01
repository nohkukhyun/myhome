export const TOAST_SHOW = "@toast/TOAST_SHOW";
export const TOAST_RESET = "@toast/TOAST_RESET";

export const toastShow = (payload: { key: string } | any) => ({
  type: TOAST_SHOW,
  payload,
});

export const toastReset = () => ({
  type: TOAST_RESET,
});
