import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, icons, SIZES } from "../constants";

const HorizontalFoodCard = ({ conatinerStyle, imageStyle, item, opPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...conatinerStyle,
      }}
    >
      {/* image */}
      <Image source={item.image} style={imageStyle} />
      {/* info */}
      <View style={{ flex: 1 }}>
        {/* name */}
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 17,
          }}
        >
          {item.name}
        </Text>
        {/* description */}
        <Text
          style={{
            color: COLORS.darkGray2,
            ...FONTS.body4,
          }}
        >
          {item.description}
        </Text>
        {/* price */}
        <Text
          style={{
            marginTop: SIZES.base,
            ...FONTS.h2,
          }}
        >
          $ {item.price}
        </Text>
      </View>
      {/* caloires */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text
          style={{
            color: COLORS.darkGray2,
            ...FONTS.body5,
          }}
        >
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
