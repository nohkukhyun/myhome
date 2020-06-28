import React from "react";
import Input from "./Input";

export default { title: "Input", Component: "Input" };

export const Inputs: React.FC = () => (
  <div>
    <Input
      placeholder={"여행지나 상품을 검색해보세요"}
      image={
        "https://w7.pngwing.com/pngs/605/56/png-transparent-search-icon-computer-icons-android-desktop-search-button-internet-share-icon-search-button.png"
      }
    />
  </div>
);
