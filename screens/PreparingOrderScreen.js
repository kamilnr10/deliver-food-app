import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderDeliver.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-m text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Animatable.View animation="slideInUp" iterationCount={1}>
        <Progress.Bar
          className="mt-5"
          size={60}
          indeterminate={true}
          color="#fff"
          fill="none"
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
