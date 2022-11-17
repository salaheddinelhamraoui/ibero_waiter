import { View, Text, Pressable } from 'react-native'
import { FONTS, SIZES, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";

const BottomNavigation = () => {

    const navigation = useNavigation();

    return (
        <View className="absolute bottom-0  w-full bg-white h-[65px]  rounded-t-[20px] px-4 pt-4 pb-2" style={{
            shadowColor: "#565958",

            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        }}>
            <View className="flex flex-row items-center justify-around h-full pb-6 mt-2">
                <Pressable onPress={() => {
                    navigation.navigate("Calculator")
                }} className="">
                    <View className="flex flex-col justify-center items-center">
                        <assets.card width={25} height={25} />

                        <Text className="mt-1" style={{
                            fontFamily: FONTS.light,
                            fontWeight: "600",
                            fontSize: SIZES.base
                        }}>

                            CHARGE
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => {
                    navigation.navigate("EditRestaurant")
                }} className="pb-4">
                    <View className="flex flex-col justify-center items-center bg-red h-[70px] w-[70px] rounded-full">
                        <assets.hamburger width={25} height={25} />
                        <Text
                            className="mt-1 text-white"
                            style={{
                                fontFamily: FONTS.light,
                                fontWeight: "600",
                                fontSize: SIZES.base
                            }}>
                            PRODUCTS
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    navigation.navigate("Tickets")
                }} className="">
                    <View className="flex flex-col justify-center items-center">
                        <assets.ticket2 width={25} height={25} />
                        <Text
                            className="mt-1"
                            style={{
                                fontFamily: FONTS.light,
                                fontWeight: "600",
                                fontSize: SIZES.base
                            }}>
                            TICKET
                        </Text>
                    </View>
                </Pressable>

            </View>
        </View>
    )
}

export default BottomNavigation