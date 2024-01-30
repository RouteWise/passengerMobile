import { Dimensions } from "react-native"

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const getWidth = (width: number) => {
    return deviceWidth * width
}

export const getHeight = (height: number) => {
    return deviceHeight * height
}