import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import AoraReactNative from "../../assets/images/AoraReactNative.png";
import FormField from "@/components/FormField";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIssubmiting] = useState(false);

  const submit = async () => {
    {
      const result = await createUser(form.email, form.password);
      setIssubmiting(true);
      router.replace("/home");
      try {
        const result = await createUser();
      } catch (error) {
        Alert.alert("error", error.nessage);
      } finally {
        setIssubmiting(false);
      }
    }
  };
  return (
    <SafeAreaView className="bg-dark ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 bg-white text-lg text-black items-start justify-center px-4">
          <Image source={AoraReactNative}></Image>
          <Text>Login to get the latest</Text>
          <FormField
            title="Email"
            placeholder={"enter email"}
            value={form.email}
            handleTextChange={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          ></FormField>
          <FormField
            placeholder={"enter password"}
            title="Password"
            value={form.password}
            handleTextChange={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          ></FormField>
          <CustomButton
            title="log in"
            handlePress={submit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
            className="w-full "
          ></CustomButton>

          <View className="flex flex-row gap-4 mt-4 items-center justify-center text-center">
            <Text>Don't have an account?</Text>
            <Link
              href="/sign-up
            "
            >
              <Text className=" flex text-center text-lg text-black font-bold">
                Register
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
