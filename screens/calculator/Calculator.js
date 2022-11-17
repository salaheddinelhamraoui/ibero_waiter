import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import HeaderBanner from "../../components/HeaderBanner";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import ToggleSwitch from "toggle-switch-react-native";
import Waiting from "./components/Waiting";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const Calculator = () => {

    const [toggleState, setToggleState] = useState(false);

    const [aceptarModal, setAceptarModal] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.lightBlue} />
            <View className="flex flex-col h-full">
                <HeaderBanner />
                <View className="px-6 flex bg-red-500 flex-row justify-between mt-2">
                    <TouchableOpacity className="bg-white py-2 rounded-2xl px-8"><Text className="text-black">INTERIOR 3</Text></TouchableOpacity>
                    <TouchableOpacity className="bg-[#FFCFCF] py-2 rounded-2xl px-8"><Text className="text-black">21%</Text></TouchableOpacity>
                </View>
                <ScrollView className="mb-20">
                    <View
                        style={
                            {
                                shadowColor: "#565958",

                                shadowOffset: {
                                    width: 0,
                                    height: 0,
                                },
                                shadowOpacity: 100,
                                shadowRadius: 100,
                                elevation: 2,
                            }
                        }
                        className="mx-6 mt-4 rounded-2xl bg-[#f2f2f2] px-4 py-4"
                    // Button Linear Gradient
                    >
                        <View className="w-full flex flex-row border-b border-[#ABABAB] pb-3 px-2" >
                            <View className="ml-auto">
                                <Text className="text-xl text-[#ABABAB]" style={{
                                    fontFamily: FONTS.Inter,
                                    fontWeight: '900'
                                }}>3,5 + 4,2 + 1,2 + 1,2 + 3,4 =</Text>
                            </View>
                        </View>
                        <View className="flex flex-row justify-between mt-4 px-2">
                            <View className="">
                                <Text className="text-4xl text-[#ABABAB]" style={{
                                    fontFamily: FONTS.Inter,
                                    fontWeight: '900'
                                }} >
                                    13,50 €
                                </Text>
                                <View className="flex flex-row">
                                    <ToggleSwitch
                                        isOn={toggleState}
                                        onColor="#4ABFD9"
                                        offColor="#565958"
                                        label=""
                                        labelStyle={{ color: "black", fontWeight: "900" }}
                                        size="small"
                                        onToggle={() => setToggleState(!toggleState)}
                                    />
                                    <Text className="ml-1">ROUND TIP</Text>
                                </View>
                            </View>
                            <View className="">
                                <Text className="text-4xl" style={{
                                    fontFamily: FONTS.Inter,
                                    fontWeight: '900'
                                }} >
                                    14,00 €
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-row px-6 w-full justify-between  mt-4">
                        <TouchableOpacity className="bg-[#7C7C7C] w-[17%] rounded-2xl py-2">
                            <Text className="text-center text-lg text-white" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#7C7C7C] w-[17%] rounded-2xl py-2">
                            <Text className="text-center text-lg text-white" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#7C7C7C] w-[17%] rounded-2xl py-2">
                            <Text className="text-center text-lg text-white" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#7C7C7C] w-[17%] rounded-2xl py-2">
                            <Text className="text-center text-lg text-white" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#FFCFCF] w-[17%] rounded-2xl py-2">
                            <Text className="text-center text-lg text-white" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}><assets.trash width={25} height={25} /></Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row flex-wrap justify-between px-8 mt-4">
                        {numbers.map((number) =>
                            <TouchableOpacity key={number} className="bg-white w-[30%] pt-4 pb-2 rounded-lg flex justify-center items-center mb-3">
                                <Text className="text-center text-5xl" style={{
                                    fontFamily: FONTS.Inter,
                                    fontWeight: '900',
                                }}>{number}</Text>
                            </TouchableOpacity>)}
                        <TouchableOpacity className="bg-white w-[30%] pt-4 pb-2 rounded-lg flex justify-center items-center mb-3">
                            <Text className="text-center text-5xl" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}>,</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-white w-[30%] pt-4 pb-2 rounded-lg flex justify-center items-center mb-3">
                            <Text className="text-center text-5xl" style={{
                                fontFamily: FONTS.Inter,
                                fontWeight: '900',
                            }}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-white w-[30%] py-3 rounded-lg flex justify-center items-center mb-3">
                            <Text className="text-center text-5xl" style={{
                            }}><assets.delete2 width={35} height={35} /></Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                <View
                    className="absolute bottom-0  right-0 left-0 bg-white h-[75px] rounded-t-[20px]"
                    style={[
                        {
                            shadowColor: "#565958",

                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7,
                        },
                    ]}
                >
                    <View className="flex flex-row justify-around items-center h-full">
                        <Pressable
                            onPress={() => {
                                // navigation.navigate("Dashboard");
                            }}
                            className="bg-light-red w-[40%] rounded-[20px]"
                        >
                            <View className="flex flex-col justify-center items-center py-2">
                                <assets.cancel width={25} height={25} />
                                <Text
                                    className="text-white text-center mt-1"
                                    style={{ fontSize: SIZES.small, fontFamily: FONTS.bold }}
                                >
                                    CANCELAR
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setAceptarModal(true);
                            }}
                            className="bg-green w-[40%] rounded-[20px]"
                        >
                            <View className="flex flex-col justify-center items-center py-2">
                                <assets.accept width={25} height={25} />
                                <Text
                                    className="text-white text-center mt-1"
                                    style={{ fontSize: SIZES.small, fontFamily: FONTS.bold }}
                                >
                                    ACEPTAR
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>

                {aceptarModal && <Waiting setAceptarModal={setAceptarModal} />}
            </View>

        </SafeAreaView>
    )
}

export default Calculator