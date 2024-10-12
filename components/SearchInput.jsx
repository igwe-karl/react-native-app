import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";

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
    
      <View className="w-full h-16 border-black-300 border-2 rounded-xl bg-black-100 px-4 items-center focus:border-black space-x-4">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          value={value}
          onChange={handleTextChange}
   
        >
          {/* {title ==="password" &&(
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
              <Image source={!showPassword ? Eye : Eye}></Image>
            </TouchableOpacity>
          )} */}
        </TextInput>
      </View>
  );
};

export default FormField;
