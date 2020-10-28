import React from "react";
import Title from "./styled/Title";
import TitleWrapper from "./styled/TitleWrapper";

const PageTitle = ({ title, home }: { title: string; home?: boolean }) => {
  return (
    <TitleWrapper home={home}>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};
export default PageTitle;
