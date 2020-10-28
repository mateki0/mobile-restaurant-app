import React from "react";
import { View } from "react-native";
import SpanText from "./styled/SpanText";
import SpanWrapper from "./styled/SpanWrapper";

const ContactSpan = () => {
  return (
    <View>
      <SpanWrapper>
        <SpanText>Adress:</SpanText>
        <SpanText>Lorem Ipsum</SpanText>
      </SpanWrapper>
      <SpanWrapper>
        <SpanText>Our Email:</SpanText>
        <SpanText>Lorem Ipsum</SpanText>
      </SpanWrapper>
      <SpanWrapper>
        <SpanText>Phone:</SpanText>
        <SpanText>Lorem Ipsum</SpanText>
      </SpanWrapper>
      <SpanWrapper>
        <SpanText>Feel free to call us or send mail</SpanText>
      </SpanWrapper>
    </View>
  );
};

export default ContactSpan;
