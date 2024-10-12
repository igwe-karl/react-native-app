import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-web";

const Trending = ({ data }) => {
  const renderItem = ({ item }) => (
    <View className="bg-white">
      <Text className="text-black">{item.prompt}</Text>
    </View>
  );
  console.log('data :>> ', data);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default Trending;
