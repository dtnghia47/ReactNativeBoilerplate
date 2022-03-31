import React from 'react'
import { Text, ScrollView } from 'react-native'
import { useTheme } from '@/Hooks'

const DashboardContainer = () => {
  const { Fonts, Gutters, Layout } = useTheme()

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>Dashboard</Text>
    </ScrollView>
  )
}

export default DashboardContainer
