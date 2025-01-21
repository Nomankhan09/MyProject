import React from 'react'
import { Stack } from "expo-router"

const MainStack = () => {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="members" />
      <Stack.Screen name="visitors" />
      <Stack.Screen name="noticeboard" />
      <Stack.Screen name="payment" />
      <Stack.Screen name="Receipt" />
      <Stack.Screen name="bookamenitie" />
      <Stack.Screen name="helpdesk" />
    </Stack>
  )
}

export default MainStack