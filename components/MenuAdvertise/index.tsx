import React from "react";
import MealComponent from "../MealComponent";
import AdvertiseWrapper from "./styled/AdvertiseWrapper";
import { advertiseImages } from "../../utils/images";
import { FlatList } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
const MenuAdvertise = () => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <AdvertiseWrapper>
      <FlatList
        data={advertiseImages}
        horizontal={true}
        keyExtractor={(item) => item.imgName}
        renderItem={({ item }) => (
          <MealComponent
            customWidth={windowWidth}
            key={item.imgName}
            image={item.uri}
            name={item.imgName}
            description={item.imgDescription}
          />
        )}
      />

      {/* {advertiseImages.map((item) => (
        <MealComponent
          key={item.imgName}
          image={item.uri}
          name={item.imgName}
          description={item.imgDescription}
        />
      ))} */}
    </AdvertiseWrapper>
  );
};

export default MenuAdvertise;
