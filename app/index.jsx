import { Image, StyleSheet, Platform, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FlatList, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Redirect, router } from "expo-router";
import aoraReactNativeCard2 from "../assets/images/AoraReactNativeCard2.png";
import aoraReactNativeCard from "../assets/images/AoraReactNativeCard.png";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-default mx-4">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex min-h-[85vh] justify-center items-center">
          <View className="flex flex-row">
            <Image
              source={aoraReactNativeCard2}
              resizeMode="contain"
              className="w-[130px] h-[140px]"
            ></Image>
            <Image
              source={aoraReactNativeCard}
              resizeMode="contain"
              className="w-[130px] h-[140px]"
            ></Image>
          </View>
          <View>
            <Text className="text-white text-center mt-10 text-3xl">
              Discover the best
            </Text>
          </View>
          <CustomButton
            handlePress={() => router.push("./(tabs)/bookmarks")}
            containerStyles={"w-full mt-7"}
            title={"get started"}
          ></CustomButton>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622"></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
