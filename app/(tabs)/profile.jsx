import { View, Text, SafeAreaView, Alert } from "react-native";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { FlatList, Image } from "react-native-web";
import { aoraReactNativeCard2 } from "../constants";
import { getAllPost } from "../../app/lib/appwrite";
import { useState, useEffect } from "react";

const Profile = () => {
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

  console.log(data);

  return (
    <SafeAreaView className="bg-default ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 bg-white text-lg text-black items-center justify-center">
          <Link href="/(auth)/sign-in">
            <Text className=" flex text-center text-lg text-black font-bold">
              bless you innit
            </Text>
          </Link>
        </View>
        <View>
          {/* <Image
            source={aoraReactNativeCard2}
            resizeMode="contain"
            className="w-[130px] h-[140px]"
          ></Image> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
