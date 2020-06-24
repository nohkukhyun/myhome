import React from "react"
import { Button } from "@storybook/react/demo"
// import Button from "./Button"

export default { title: "Button", Component: "Button" }

export const withText: React.FC = () => <Button>Hello Button</Button>

export const withEmoji: React.FC = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
