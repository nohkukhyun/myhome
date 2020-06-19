import { INCREASE_NUMBER, DECREASE_NUMBER, DIFF_NUMBER } from "./counter.action"
import * as actions from "./counter.action"

type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

type CounterAction =
  | ReturnType<typeof actions.increaseNumber>
  | ReturnType<typeof actions.decreaseNumber>
  | ReturnType<typeof actions.diffNumber>

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREASE_NUMBER:
      return {
        ...state,
        count: state.count - 1,
      }

    case DIFF_NUMBER:
      return {
        ...state,
        count: state.count + action.payload,
      }

    default:
      return state
  }
}

export default counter
