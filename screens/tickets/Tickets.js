import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import FocusedStatusBar from "../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import BottomNavigation from '../../components/BottomNavigation';
import HeaderBanner from '../../components/HeaderBanner';
import { useState } from 'react';
import TicketCard from "./components/TicketCard"

const Tickets = () => {

    const [openedTicket, setOpenedTicket] = useState(0);

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
                                Last orders
                            </Text>
                        </View>
                        <TicketCard openedTicket={openedTicket} setOpenedTicket={setOpenedTicket} ticketId={0} bg={"bg-[#E6EED6]"} />
                        <TicketCard openedTicket={openedTicket} setOpenedTicket={setOpenedTicket} ticketId={1} />
                        <TicketCard openedTicket={openedTicket} setOpenedTicket={setOpenedTicket} ticketId={2} />
                    </View>
                </ScrollView>
            </View>
            <BottomNavigation />
        </SafeAreaView>
    )
}

export default Tickets