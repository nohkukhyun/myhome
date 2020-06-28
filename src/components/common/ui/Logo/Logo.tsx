import React from "react";
import styled from "styled-components";

type LogoProps = {
  image?: string;
  logoStyles?: React.CSSProperties | {};
};

const LogoWrap = styled.div<LogoProps>`
  ${(props) => (props.logoStyles ? props.logoStyles : "width:150px")}
`;

const LogoImage = styled.img`
  width: 100%;
`;

function Logo({ image, logoStyles }: LogoProps) {
  return (
    <LogoWrap style={logoStyles && logoStyles}>
      <LogoImage src={image} alt={image} />
    </LogoWrap>
  );
}

export default Logo;
