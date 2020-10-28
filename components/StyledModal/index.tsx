import React, { useState } from "react";
import { Text, View } from "react-native";
import OpenModal from "../SingleMealItem/styled/OpenModal";
import SingleIngredient from "./SingleIngredient";
import IngredientsContainer from "./styled/IngredientsContainer";

import ModalChoose from "./styled/ModalChoose";
import ModalMealName from "./styled/ModalMealName";
import ModalNameContainer from "./styled/ModalNameContainer";
import ModalWrapper from "./styled/ModalWrapper";
import { ItemProps } from "../SingleMealItem";
import { FlatList } from "react-native-gesture-handler";
import PriceContainer from "./styled/PriceContainer";
import IngredientCount from "./styled/IngredientCount";

interface IStyledModal {
  setIsOpen: (boolean) => void;
}
const StyledModal = ({ setIsOpen, item }: IStyledModal & ItemProps) => {
  const [price, setPrice] = useState(item.price);
  return (
    <ModalWrapper>
      <IngredientsContainer>
        <FlatList
          data={item.ingredients}
          keyExtractor={(item) => item.ingredientName}
          renderItem={({ item }) => (
            <SingleIngredient
              ingredient={item.ingredientName}
              count={item.count}
              itemPrice={item.price}
              setPrice={setPrice}
              price={price}
            />
          )}
          ListHeaderComponent={
            <ModalNameContainer>
              <ModalMealName>{item.name}</ModalMealName>
              <ModalChoose>Choose Ingredients:</ModalChoose>
            </ModalNameContainer>
          }
          ListFooterComponent={
            <View>
              <PriceContainer>
                <IngredientCount>{price.toFixed(1)}$</IngredientCount>
              </PriceContainer>

              <OpenModal onPress={() => setIsOpen(false)}>
                <Text>Close</Text>
              </OpenModal>
            </View>
          }
        />
      </IngredientsContainer>
    </ModalWrapper>
  );
};

export default StyledModal;
