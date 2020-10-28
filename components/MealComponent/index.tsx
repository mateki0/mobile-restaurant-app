import React from "react";
import MealDescription from "./styled/MealDescription";
import MealImage from "./styled/MealImage";
import MealName from "./styled/MealName";
import SingleMealWrapper from "./styled/SingleMealWrapper";
interface IMeal {
  image: string;
  name: string;
  description: string;
  customWidth: number;
}
const MealComponent = ({ image, name, description, customWidth }: IMeal) => {
  return (
    <SingleMealWrapper>
      <MealImage source={image} customWidth={customWidth} />
      <MealName>{name}</MealName>
      <MealDescription>{description}</MealDescription>
    </SingleMealWrapper>
  );
};
export default MealComponent;
