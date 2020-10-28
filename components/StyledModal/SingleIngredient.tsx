import React, { useState } from "react";
import { Text, View } from "react-native";
import CounterContainer from "./styled/CounterContainer";
import IngredientButton from "./styled/IngredientButton";
import IngredientCount from "./styled/IngredientCount";
import IngredientName from "./styled/IngredientName";
import SingleIngredientContainer from "./styled/SingleIngredientContainer";

interface ISingleIngredient {
  ingredient: string;
  count: number;
  setPrice: (price: number) => void;
  price: number;
  itemPrice: number;
}
const SingleIngredient = ({
  ingredient,
  count,
  setPrice,
  itemPrice,
  price,
}: ISingleIngredient) => {
  const [itemCount, setItemCount] = useState(count);

  const handleIncrement = (itemCount) => {
    if (itemCount < 5) {
      setItemCount(itemCount + 1);

      setPrice(price + itemPrice);
    }
  };

  const handleDecrement = (itemCount) => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
      setPrice(price - itemPrice);
    }
  };
  return (
    <SingleIngredientContainer>
      <CounterContainer>
        <IngredientButton onPress={() => handleIncrement(itemCount)}>
          <Text>+</Text>
        </IngredientButton>
        <IngredientCount>{itemCount}</IngredientCount>
        <IngredientButton onPress={() => handleDecrement(itemCount)}>
          <Text>-</Text>
        </IngredientButton>
      </CounterContainer>
      <IngredientName>{ingredient}</IngredientName>
    </SingleIngredientContainer>
  );
};
export default SingleIngredient;
