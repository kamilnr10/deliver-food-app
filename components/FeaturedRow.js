import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // console.log("id: " + id);
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "featured" && _id == $id ] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...
        },
        type->{
          title
        }
      }
    }[0]
    `,
        { id }
      );
      setRestaurants(data.restaurants);
      // .then((data) => {

      //   setRestaurants(data.restaurants);
      // });
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.title}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={[restaurant.dishes]}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
