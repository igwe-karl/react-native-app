import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Link, router } from "expo-router";
import AoraReactNative from "../../assets/images/AoraReactNative.png";
import FormField from "@/components/FormField";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../lib/appwrite";
import { FlatList } from "react-native";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIssubmiting] = useState(false);

  const submit = async () => {
    {
      if (!form.email || !form.password || !form.username) {
        Alert.alert(Error, "pleease fill out form");
      }
      setIssubmiting(true);
      try {
        const result = await createUser(
          form.email,
          form.password,
          form.username
        );
        router.replace("/home");
      } catch (error) {
        Alert.alert("error", error.nessage);
      } finally {
        setIssubmiting(false);
      }
    }
    // () => router.push("../tabs/profile");
  };

  const Products = [
    { id: 1, name: "igwe", age: "4", married: false },
    { id: 2, name: "sule", age: "2", married: false },
  ];

  const renderItem = ({ item }) => (
    <View className="bg-white">
      <Text className="text-black">{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <FlatList
          data={Products}
          renderItem={renderItem}
          ListHeaderComponent={
            <View className="flex-1 bg-white text-lg text-black items-start justify-center px-4">
              <Image source={AoraReactNative}></Image>
              <Text className="text-2xl font-bold">Sign Up</Text>
              <FormField
                title="username"
                placeholder={"enter username"}
                value={form.username}
                handleTextChange={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-7"
              ></FormField>
              <FormField
                title="Email"
                placeholder={"enter email"}
                value={form.email}
                handleTextChange={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
              ></FormField>
              <FormField
                placeholder={"enter password"}
                title="Password"
                value={form.password}
                handleTextChange={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
              ></FormField>
              <CustomButton
                title="Sign Up"
                handlePress={submit}
                containerStyles={"mt-7"}
                isLoading={isSubmitting}
                className="w-full "
              ></CustomButton>

              <View className="flex flex-row gap-4 mt-4 items-center justify-center text-center">
                <Text>Already have an account?</Text>
                <Link
                  href="/sign-in
                "
                >
                  <Text className=" flex text-center text-lg text-black font-bold">
                    Login
                  </Text>
                </Link>
              </View>
            </View>
          }
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View className="bg-white">
              <Text>Some content above the list!!!!!</Text>
            </View>
          }
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default Register;
