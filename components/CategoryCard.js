import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="w-20 h-20 mr-4">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-full w-full rounded-sm"
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
      />
      <Text className="absolute bottom-0 font-bold text-white z-10 self-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
