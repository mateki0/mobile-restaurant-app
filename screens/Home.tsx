import React, { useRef } from "react";
import { Button, ScrollViewProps } from "react-native";
import MealSlider from "../components/MealSlider";

import MenuAdvertise from "../components/MenuAdvertise";
import PageTitle from "../components/PageTitle";
import TagLine from "../components/TagLine";
import ScreenWrapper from "./styled/ScreenWrapper";
import { breakfastImages, dessertsImages, dinnerImages } from "../utils/images";
import WelcomeToRestaurant from "../components/WelcomeToRestaurant";
import Footer from "../components/Footer";
interface NavigationProps {
  navigation: {
    push: (e: string) => void;
  };
}

const Home = ({ navigation }: NavigationProps) => {
  const scrollRef = useRef<ScrollViewProps>(null);
  return (
    <ScreenWrapper ref={scrollRef} nestedScrollEnabled={true}>
      <Button
        title="about navigation"
        onPress={() => navigation.push("About")}
      />
      <TagLine />
      <MenuAdvertise />
      <PageTitle
        title="Information about online food order system and delivery"
        home={true}
      />
      <MealSlider name="Breakfast" images={breakfastImages} />
      <MealSlider name="Dinner" images={dinnerImages} />
      <MealSlider name="Desserts" images={dessertsImages} />
      <WelcomeToRestaurant />
      <Footer scrollRef={scrollRef} />
    </ScreenWrapper>
  );
};

export default Home;
