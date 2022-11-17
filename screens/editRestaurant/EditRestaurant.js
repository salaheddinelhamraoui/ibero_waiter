import { View, Text, SafeAreaView, ScrollView, Pressable, Image, TouchableOpacity } from 'react-native';
import FocusedStatusBar from "../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import BottomNavigation from '../../components/BottomNavigation';
import HeaderBanner from '../../components/HeaderBanner';
import TablesCard from "./components/TablesCard";

const EditRestaurant = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <HeaderBanner />
                <TouchableOpacity className="w-[140px] mx-6 mb-2 px-3 py-2 rounded-2xl bg-light-blue">
                    <View className="flex flex-row justify-between">
                        <Text className="text-white" style={{
                            fontFamily: FONTS.NunitoRegular
                        }}>
                            Propina:
                        </Text>
                        <Text className="text-white" style={{
                            fontFamily: FONTS.NunitoBold
                        }}>
                            3,1 €
                        </Text>
                    </View>
                </TouchableOpacity>
                <ScrollView className="mb-16" >
                    <View className="rounded-[20px] px-2 pb-4 m-4">
                        <View className=" mb-4">
                            <Text
                                style={{
                                    fontFamily: FONTS.NunitoBold,
                                    fontSize: SIZES.extraLarge,
                                    fontWeight: '900'
                                }}
                            >
                                Interior
                            </Text>
                            <TablesCard />
                        </View>
                        <View className="mt-6 mb-4">
                            <Text
                                style={{
                                    fontFamily: FONTS.NunitoBold,
                                    fontSize: SIZES.extraLarge,
                                    fontWeight: '900'
                                }}
                            >
                                Terraza
                            </Text>
                            <TablesCard />
                        </View>
                        <View className="mt-6 mb-4">
                            <Text
                                style={{
                                    fontFamily: FONTS.NunitoBold,
                                    fontSize: SIZES.extraLarge,
                                    fontWeight: '900'
                                }}
                            >
                                Terraza
                            </Text>
                            <TablesCard />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <BottomNavigation />
        </SafeAreaView>
    )
}

export default EditRestaurant