import React from "react";
import TitleWrapper from "../PageTitle/styled/TitleWrapper";
import SingleMealItem from "../SingleMealItem";
import BoxTitle from "./styled/BoxTitle";
import BoxWrapper from "./styled/BoxWrapper";

interface ISingleMenuBox {
  title: string;
}
const items = [
  {
    name: "Burger",
    price: 2.5,
    ingredients: [
      {
        ingredientName: "Roll",
        count: 1,
        price: 0.5,
      },
      {
        ingredientName: "Beef",
        count: 1,
        price: 1.5,
      },
      {
        ingredientName: "Cucumbers",
        count: 1,
        price: 0.3,
      },
      {
        ingredientName: "Tomatoes",
        count: 1,
        price: 0.2,
      },
    ],
  },
  {
    name: "Spaghetti",
    price: 2,
    ingredients: [
      {
        ingredientName: "Pasta",
        count: 1,
        price: 0.5,
      },
      {
        ingredientName: "Pork",
        count: 1,
        price: 1,
      },
      {
        ingredientName: "Carrot",
        count: 1,
        price: 0.2,
      },
      {
        ingredientName: "Sauce",
        count: 1,
        price: 0.3,
      },
    ],
  },
];
const SingleMenuBox = ({ title }: ISingleMenuBox) => {
  return (
    <BoxWrapper>
      <TitleWrapper>
        <BoxTitle>{title}</BoxTitle>
      </TitleWrapper>
      {items.map((item, index) => (
        <SingleMealItem item={item} key={index} />
      ))}
    </BoxWrapper>
  );
};

export default SingleMenuBox;
