import { View, Text ,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SplashScreen from "expo-splash-screen";
import { Redirect, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
    const [isLogin, setIsLogin] = useState(true)
    useEffect(() => {
        setTimeout(() => { }, 2000)
        SplashScreen.hideAsync();
    }, []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <Stack screenOptions={{ headerShown: false }} />
           { isLogin ? <Redirect href={"./(main)"} /> : <Redirect href={"./(auth)"} />}

           </GestureHandlerRootView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
export default RootLayout