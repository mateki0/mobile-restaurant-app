import React from "react";
import SliderName from "./styled/SliderName";
import SliderNameWrapper from "./styled/SliderNameWrapper";
import SliderWrapper from "./styled/SliderWrapper";
import { SliderBox } from "react-native-image-slider-box";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface SliderProps {
  name: string;
  images: {
    imgName: string;
    imgDescription: string;
    uri: string;
  }[];
}
const MealSlider = ({ name, images }: SliderProps) => {
  const navigation = useNavigation();
  return (
    <SliderWrapper>
      <SliderNameWrapper>
        <SliderName>{name}</SliderName>
      </SliderNameWrapper>
      <SliderBox
        images={images.map((item) => item.uri)}
        autoplay={true}
        circleLoop={true}
      ></SliderBox>
      <Button
        title="See our Menu"
        onPress={() => navigation.navigate("Menu")}
      />
    </SliderWrapper>
  );
};

export default MealSlider;
