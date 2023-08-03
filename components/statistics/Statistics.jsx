import React from 'react'
import {View, Pressable, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../layout/header/Header';
import styles from './statistics.style';
import FooterNav from '../../layout/footer/FooterNav';
import { DropIcon } from '../../assets/icons/icons';
import Chart from './Chart';


const Statistics = ({navigation}) => {
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

          <View style={styles.tabContainer}>
            <Pressable>
              <Text style={styles.tab(true)}>Son 7 gün</Text>
            </Pressable>

            <Pressable>
              <Text style={styles.tab(false)}>Son 30 gün</Text>
            </Pressable>

            <Pressable>
              <Text style={styles.tab(false)}>Tarix seç</Text>
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
              <Text style={styles.cardDesc}>30523 L</Text>
            </View>
          </View>
        </View> 

        {/* <FooterNav  navigation={navigation}/> */}
        </LinearGradient>
    </View>

  )
}

export default Statistics

