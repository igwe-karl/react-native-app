import { View, Text, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { getAllPost } from "../../app/lib/appwrite";

const Bookmarks = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await getAllPost();
        console.log(response);
        setData(response);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const RenderItem = ({ item }) => (
    <View className="bg-white">
      <Text className="text-black">{item?.prompt}</Text>
    </View>
  );
  console.log(data);
  return (
    <View className="h-full bg-white">
      <FlatList
        keyExtractor={(item) => item?.$id}
        data={data || []}
        ListHeaderComponent={<Text>Bookmarks</Text>}
        renderItem={RenderItem}
      ></FlatList>
    </View>
  );
};

export default Bookmarks;
