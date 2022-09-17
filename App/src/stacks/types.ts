import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    CheckBox: undefined;
    BottomSheet: undefined;
    Tab: undefined;
    Server: undefined;
};

export type RootStackNavigationProp = 
    NativeStackNavigationProp<RootStackParamList>;
