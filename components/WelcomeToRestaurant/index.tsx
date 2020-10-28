import React from "react";
import Title from "../PageTitle/styled/Title";
import RestaurantDescription from "./styled/RestaurantDescription";
import WelcomeWrapper from "./styled/WelcomeWrapper";

const WelcomeToRestaurant = () => {
  return (
    <WelcomeWrapper>
      <Title>Welcome to restaurant</Title>
      <RestaurantDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor
        est vitae sapien posuere maximus. Mauris luctus nulla in condimentum
        lobortis. Vivamus mollis, est vitae bibendum placerat, dui ligula
        fermentum nunc, sit amet dignissim mauris tellus ut dui. Integer et ante
        sed urna dictum molestie ut ut sapien. Praesent dignissim, augue eu
        viverra facilisis, mauris turpis ultrices neque, nec condimentum velit
        nisl ac lacus.
      </RestaurantDescription>
    </WelcomeWrapper>
  );
};

export default WelcomeToRestaurant;
