import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  handlePress,
  isLoading,
  containerStyles,
  title,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`w-full bg-white text-white rounded-xl border-2 justify-center p-2 ${containerStyles}
    ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text-2xl capitalize text-center ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
