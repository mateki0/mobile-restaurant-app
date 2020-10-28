import React from "react";
import { View } from "react-native";
import Heading from "./styled/Heading";
import SubHeading from "./styled/SubHeading";
import TagWrapper from "./styled/TagWrapper";

const TagLine = () => {
  return (
    <View>
      <TagWrapper>
        <Heading>My Test Restaurant</Heading>
        <SubHeading>
          I should write some description here, but this page is only for
          learning reasons, so it doesn't matter.
        </SubHeading>
      </TagWrapper>
    </View>
  );
};
export default TagLine;
