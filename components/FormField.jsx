import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
// import {icons} from "../assets/icons"
// import Eye from "../assets/icons/eye.png";

const FormField = ({
  title,
  handleTextChange,
  value,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`w-full flex bg- text-black space-y-2 ${otherStyles}`}>
      <Text className="text-black">{title}</Text>
      <View className="w-full h-16 border-black-300 border-2 rounded-xl bg-black-100 px-4 items-center focus:border-black">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          value={value}
          onChange={handleTextChange}
          // secureTextEntry={title === "password" && !showPassword}
        >
          {/* {title ==="password" &&(
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
              <Image source={!showPassword ? Eye : Eye}></Image>
            </TouchableOpacity>
          )} */}
        </TextInput>
      </View>
    </View>
  );
};

export default FormField;
