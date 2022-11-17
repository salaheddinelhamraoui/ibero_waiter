import { View, Text, Pressable } from 'react-native'
import { FONTS, assets } from "../../../constants";

const Waiting = ({ setAceptarModal }) => {
    return (
        <Pressable
            className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000090]"
            onPress={() => {
                setAceptarModal(false)
            }}
        >
            <View className="flex flex-col items-center justify-center h-full">
                <assets.card2 height="100" />
                <Text className="text-white text-center text-3xl my-2 mx-12" style={{
                    fontFamily: FONTS.NunitoBold,
                }}>Waiting for the
                    card reading</Text>
            </View>
        </Pressable>
    )
}

export default Waiting