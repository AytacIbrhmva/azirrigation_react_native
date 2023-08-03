import React, { useState } from 'react'
import {Text, View, Pressable} from 'react-native'
import styles from './footer.style'
import { HomeBoldIcon, HomeLinearIcon, ChartLinearIcon, ChartBoldIcon, NotificationLinearIcon,NotificationBoldIcon, SettingsLinearIcon, SettingsBoldIcon } from '../../assets/icons/icons'

const FooterNav = ({navigation}) => {
  const [activeNav, setActiveNav] = useState("Home")
const getNav = (navName) => {
  navigation.navigate(navName)
  setActiveNav(navName)
}

  return (
    <View style={styles.container}>
      <Pressable style={styles.linkItem} onPress={() => getNav('Home')}>
        {activeNav == 'Home' ? <HomeBoldIcon /> : <HomeLinearIcon />}
        <Text style={styles.linkText}>Home</Text>
      </Pressable>

      <Pressable style={styles.linkItem} onPress={() => getNav("Statistics")}>
        {activeNav == 'Statistics' ? <ChartBoldIcon /> : <ChartLinearIcon />}  
        <Text style={styles.linkText}>Statistikalar</Text>
      </Pressable>

      <Pressable style={styles.linkItem} onPress={() => getNav("Notifications")}>
        {activeNav == 'Notifications' ? <NotificationBoldIcon /> : <NotificationLinearIcon />}  
        <Text style={styles.linkText}>Bildirişlər</Text>
      </Pressable>

      <Pressable style={styles.linkItem} onPress={() => getNav("Settings")}>
        {activeNav == 'Settings' ? <SettingsBoldIcon /> : <SettingsLinearIcon />}  
        <Text style={styles.linkText}>Parametrlər</Text>
      </Pressable>
    </View>
  )
}

export default FooterNav;