import React from "react";
import Logo from "./Logo";

export default { title: "Logo", Component: "Logo" };

export const logo: React.FC = () => (
  <div>
    <Logo
      image={`https://images.unsplash.com/photo-1572094382897-21abe88fb269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`}
    />
  </div>
);
