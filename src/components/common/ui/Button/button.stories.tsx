import React from "react";
import Button from "./Button";

export default { title: "Buttons", Component: "Button" };

// export const withText: React.FC = () => <Button>Hello Button</Button>

// export const withEmoji: React.FC = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// )

export const buttons: React.FC = () => (
  <div>
    <Button onClick={() => ({})} title={"파트너등록하기"}></Button>

    <Button onClick={() => ({})} title={"로그인"}></Button>

    <Button
      onClick={() => ({})}
      title={"회원가입"}
      style={{
        color: "#00a8cc",
        border: "1px solid #00a8cc",
        borderRadius: "3px",
      }}
    ></Button>
  </div>
);
