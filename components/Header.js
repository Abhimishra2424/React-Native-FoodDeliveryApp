import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS } from "../constants";

const Header = ({ title, containerStyle, LeftComponent, RightComponent }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        ...containerStyle,
      }}
    >
      {/* left */}
      <LeftComponent />

      {/* title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
      </View>
      {/* right */}
      <RightComponent />
    </View>
  );
};

export default Header;
