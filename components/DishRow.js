import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, description, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  const basket = useSelector(selectBasketItems);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    // console.log("id:" + id);
    dispatch(addToBasket({ id, name, description, price, imgUrl }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    // console.log("remove: " + id);
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        } `}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{
                uri: urlFor(imgUrl).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
