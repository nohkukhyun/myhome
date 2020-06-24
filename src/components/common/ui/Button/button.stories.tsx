import React from "react"
// import { Button } from "@storybook/react/demo"
import Button from "./Button"

export default { title: "Buttons", Component: "Button" }

// export const withText: React.FC = () => <Button>Hello Button</Button>

// export const withEmoji: React.FC = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// )

export const Default: React.FC = () => (
  <Button
    onClick={() => ({})}
    title={"search"}
    backgroundColor={"#eb4559"}
  ></Button>
)

export const Active: React.FC = () => (
  <Button onClick={() => ({})} title={"search"}></Button>
)
