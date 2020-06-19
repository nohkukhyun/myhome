export const INCREASE_NUMBER = "INCREASE_NUMBER" as const
export const DECREASE_NUMBER = "DECREASE_NUMBER" as const
export const DIFF_NUMBER = "DIFF_NUMBER" as const

export const increaseNumber = () => ({
  type: INCREASE_NUMBER,
})

export const decreaseNumber = () => ({
  type: DECREASE_NUMBER,
})

export const diffNumber = (payload: number) => ({ type: DIFF_NUMBER, payload })
