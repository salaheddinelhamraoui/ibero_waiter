import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FONTS, SIZES, assets } from "../../../constants";

const TablesCard = ({ }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>

      <View className="flex flex-row flex-wrap gap-4 mt-4 items-center">
        <TouchableOpacity
          className="w-[25%] bg-white px-8 py-4 rounded-[20px]"
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraExtraLarge,
            }}
          >
            1
          </Text>

        </TouchableOpacity>
        <TouchableOpacity className="w-[25%] bg-white px-8 py-4 rounded-[20px]">
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraExtraLarge,
            }}
          >
            2
          </Text>

        </TouchableOpacity>
        <TouchableOpacity className="w-[25%] bg-[#BBC5AA] px-8 py-4 rounded-[20px]">
          <Text
            className="text-white"
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraExtraLarge,
            }}
          >
            3
          </Text>

        </TouchableOpacity>
        <TouchableOpacity className="w-[25%] bg-dark-blue px-8 py-4 rounded-[20px]">
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraExtraLarge,
            }}
            className="text-white"
          >
            4
          </Text>

        </TouchableOpacity>
        <TouchableOpacity className="w-[25%] bg-white px-8 py-4 rounded-[20px]">
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraExtraLarge,
            }}
          >
            5
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TablesCard;
