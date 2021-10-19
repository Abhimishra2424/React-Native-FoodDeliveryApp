import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS } from "../constants";

const Header = ({ title, containerStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        ...containerStyle,
      }}
    >
      {/* left */}

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
    </View>
  );
};

export default Header;
