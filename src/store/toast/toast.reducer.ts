import * as toastaction from "./toast.action"

type ToastProps = {
  popup: {
    message?: string | any
    show: boolean
    count?: number | any
  }
}

const initialState: ToastProps = {
  popup: {
    message: "",
    show: false,
    count: 0,
  },
}

export type toastActions = ReturnType<typeof toastaction.toastShow>

function toast(state: ToastProps = initialState, action: toastActions) {
  switch (action.type) {
    case toastaction.TOAST_SHOW: {
      return {
        ...state,
        popup: {
          message: action.payload.message,
          show: true,
          count: state.popup.count + 1,
        },
      }
    }

    case toastaction.TOAST_RESET: {
      return {
        ...state,
        popup: {
          message: "",
          show: false,
          count: state.popup.count,
        },
      }
    }

    default:
      return state
  }
}

export default toast
