import React, { useRef } from "react";
import AboutDescription from "../components/AboutDescription";
import Footer from "../components/Footer";
import MenuAdvertise from "../components/MenuAdvertise";
import PageTitle from "../components/PageTitle";
import ScreenWrapper from "./styled/ScreenWrapper";
import { ScrollViewProps } from "react-native";
const About = () => {
  const scrollRef = useRef<ScrollViewProps>(null);
  return (
    <ScreenWrapper ref={scrollRef} nestedScrollEnabled={true}>
      <PageTitle title="About us" />
      <AboutDescription />
      <MenuAdvertise />
      <Footer scrollRef={scrollRef} />
    </ScreenWrapper>
  );
};

export default About;
