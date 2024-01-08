import React, { useState } from 'react'
import {View, Pressable, Text, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../layout/header/Header';
import styles from './statistics.style';
import FooterNav from '../../layout/footer/FooterNav';
import { DropIcon, EnergyIcon} from '../../assets/icons/icons';
import Chart from './Chart';


const Statistics = ({navigation}) => {
  const [activeDate, setActiveDate] = useState('Son 7 gün')
  return (

    <View style={{flex: 1}}>
        <LinearGradient
        colors={['#219BD3', '#0C588A']}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{flex: 1}}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Statistikalar</Text>
          <ScrollView>
            <View style={styles.tabContainer}>
              <Pressable onPress={() => setActiveDate('Son 7 gün')}>
                <Text style={styles.tab(activeDate === 'Son 7 gün')}>Son 7 gün</Text>
              </Pressable>

              <Pressable onPress={() => setActiveDate('Son 30 gün')}>
                <Text style={styles.tab(activeDate === 'Son 30 gün')}>Son 30 gün</Text>
              </Pressable>

              <Pressable onPress={() => setActiveDate('choose date')}>
                <Text style={styles.tab(activeDate === 'choose date')}>Tarix seç</Text>
              </Pressable>
            </View>

            <Text style={styles.dateText}>03 mart - 10 mart 2023</Text>

            <Chart />

            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <DropIcon />
              </View>

              <View style={styles.cardRight}>
                <Text style={styles.cardTitle}>Ümumi su sərfiyyatı</Text>
                <Text style={styles.cardDesc}>8000 L</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <EnergyIcon />
              </View>

              <View style={styles.cardRight}>
                <Text style={styles.cardTitle}>Ümumi enerji sərfiyyatı</Text>
                <Text style={styles.cardDesc}>10 AZN</Text>
              </View>
            </View>
          </ScrollView>
        </View> 

        {/* <FooterNav  navigation={navigation}/> */}
        </LinearGradient>
    </View>

  )
}

export default Statistics

