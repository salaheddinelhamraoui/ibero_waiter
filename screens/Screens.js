import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { FONTS } from "../constants";
import EditRestaurant from "./editRestaurant/EditRestaurant";
import Tickets from "./tickets/Tickets";
import Calculator from "./calculator/Calculator";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#F2F2F2",
    },
};

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: "green" }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: "400",
                fontFamily: FONTS.bold,
            }}
            text2Style={{
                fontFamily: FONTS.bold,
            }}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17,
            }}
            text2Style={{
                fontSize: 15,
            }}
        />
    ),
    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    ),
};

const Stack = createStackNavigator();

const Screens = () => {

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationEnabled: false,
                }}
                initialRouteName="EditRestaurant"
            >
                <Stack.Screen name="EditRestaurant" component={EditRestaurant} />
                <Stack.Screen name="Tickets" component={Tickets} />
                <Stack.Screen name="Calculator" component={Calculator} />
            </Stack.Navigator>
            <Toast config={toastConfig} />
        </NavigationContainer>
    );
};

export default Screens;
