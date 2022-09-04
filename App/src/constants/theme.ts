import { Dimensions } from "react-native";

//figma default size 
export const basicDimensions = {
    height: 640,
    width: 360,
};

//calculate custom size
export const DEVICE_HEIGHT : any = (
    Dimensions.get('screen').height *
    (1 / basicDimensions.height)
).toFixed(2);

export const DEVICE_WIDTH : any = (
    Dimensions.get('screen').height *
    (1 / basicDimensions.width)
).toFixed(2);