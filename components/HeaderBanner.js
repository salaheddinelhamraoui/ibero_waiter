import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { assets, FONTS } from '../constants'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeaderBanner = () => {

    return (
        <View className="mt-[20px] mx-[10px]  rounded-[20px] px-2">
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Image source={assets.banner} resizeMode="stretch" className={`w-full h-[80px]`} ></Image>
            </View>
        </View>
    )
}



export default HeaderBanner