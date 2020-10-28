import React from "react";
import FooterLink from "./styled/FooterLink";
import FooterWrapper from "./styled/FooterWrapper";
import LinksWrapper from "./styled/LinksWrapper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Footer = ({ scrollRef }) => {
  const navigation = useNavigation();

  const handleScroll = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  return (
    <FooterWrapper>
      <LinksWrapper>
        <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
          <FooterLink margin="20px">Privacy</FooterLink>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
          <FooterLink>Terms</FooterLink>
        </TouchableOpacity>
      </LinksWrapper>
      <TouchableOpacity onPress={handleScroll}>
        <FooterLink>Back To Top</FooterLink>
      </TouchableOpacity>
    </FooterWrapper>
  );
};

export default Footer;
