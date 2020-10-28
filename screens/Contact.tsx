import React, { useRef } from "react";
import ScreenWrapper from "./styled/ScreenWrapper";
import { ScrollViewProps } from "react-native";
import PageTitle from "../components/PageTitle";
import SubPageWrapper from "../components/SubPageWrapper/styled/SubPageWrapper";
import ContactSpan from "../components/ContactSpan";
import MenuAdvertise from "../components/MenuAdvertise";
import Footer from "../components/Footer";

const Contact = () => {
  const scrollRef = useRef<ScrollViewProps>(null);
  return (
    <ScreenWrapper nestedScrollEnabled={true} ref={scrollRef}>
      <PageTitle title="Contact" />
      <SubPageWrapper>
        <ContactSpan />
      </SubPageWrapper>
      <MenuAdvertise />
      <Footer scrollRef={scrollRef} />
    </ScreenWrapper>
  );
};

export default Contact;
