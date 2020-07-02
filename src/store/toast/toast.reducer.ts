import * as toastaction from "./toast.action";
import { act } from "@testing-library/react";

export interface ToastProps {
  message?: string;
  index?: number;
}

export interface AppState {
  apiCalling: boolean;
  toasts: ToastProps[];
}

const initialState: AppState = {
  apiCalling: false,
  toasts: [],
};

export type toastActions = ReturnType<typeof toastaction.toastShow>;

function toast(state: AppState = initialState, action: toastActions) {
  switch (action.type) {
    case toastaction.TOAST_SHOW: {
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    }

    case toastaction.TOAST_RESET: {
      const toastId = action.payload;
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.index !== toastId),
      };
    }

    default:
      return state;
  }
}

export default toast;
