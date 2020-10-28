import React from "react";
import PageTitle from "../components/PageTitle";
import SingleMenuBox from "../components/SingleMenuBox";
import ScreenWrapper from "./styled/ScreenWrapper";

const Menu = () => {
  return (
    <ScreenWrapper>
      <PageTitle title="Checkout our menu" />
      <SingleMenuBox title="Meals" />
    </ScreenWrapper>
  );
};

export default Menu;
