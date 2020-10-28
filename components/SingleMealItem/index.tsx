import React, { useState } from "react";
import { Text, Modal } from "react-native";
import MealName from "../MealComponent/styled/MealName";
import StyledModal from "../StyledModal";
import MealIngredients from "./styled/MealIngredients";
import NameContainer from "./styled/NameContainer";
import OpenModal from "./styled/OpenModal";
import SingleMealItemContainer from "./styled/SingleMealItemContainer";

export interface ItemProps {
  item: {
    name: string;
    price: number;
    ingredients: {
      ingredientName: string;
      count: number;
      price: number;
    }[];
  };
}
const SingleMealItem = ({ item }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(item);
  return (
    <SingleMealItemContainer>
      <NameContainer>
        <MealName>{item.name}</MealName>
      </NameContainer>
      <MealIngredients>
        {Object.values(item.ingredients).map((ingredient, index) => (
          <Text adjustsFontSizeToFit={true} key={index}>
            {ingredient.ingredientName}
          </Text>
        ))}
      </MealIngredients>
      <NameContainer>
        <MealName>{item.price}$</MealName>
        <OpenModal onPress={() => setIsOpen(true)}>
          <Text>Add To Cart</Text>
        </OpenModal>
      </NameContainer>

      <Modal visible={isOpen} animationType="slide" transparent={false}>
        <NameContainer>
          <StyledModal setIsOpen={setIsOpen} item={item} />
        </NameContainer>
      </Modal>
    </SingleMealItemContainer>
  );
};

export default SingleMealItem;
