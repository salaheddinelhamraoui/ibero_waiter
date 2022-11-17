export const COLORS = {
    primary: "#E6EED6",
    secondary: "#DDE2C6",
    dark: "#090C02",
    red: "#A72608",
    darkGray: "#BBC5AA",
    gray: "#F2F2F2",
    lightBlue: "#4ABFD9",
    GrayA1: "#A19898",
};

export const SIZES = {
    base: 10,
    small: 12,
    font: 12,
    medium: 13,
    extraMedium: 16,
    large: 24,
    extraLarge: 26,
    extraExtraLarge: 34,
};

export const FONTS = {
    bold: "NunitoBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "GilroyLight",
    light: "GilroyLight",
    NunitoBold: "NunitoBold",
    NunitoRegular: "NunitoRegular",
    Inter: "Inter",
    Varela: "Varela",
};

export const SHADOWS = {
    light: {
        shadowColor: "#565958",

        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 100,
        shadowRadius: 100,
        elevation: 2,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};
