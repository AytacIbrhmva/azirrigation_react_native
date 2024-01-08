import React, { useState, useEffect, useCallback } from 'react';
import {View, ScrollView, Text, RefreshControl} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from './home.style';
import Header from '../../layout/header/Header';
import Card from './card/card';
import FooterNav from '../../layout/footer/FooterNav';
import axios from 'axios';

const Home = ({navigation}) => {
  const [motorStatus, setMotorStatus] = useState(0)
  const [waterLevel, setWaterLevel] = useState(1)
  const [refreshing, setRefreshing] = useState(false);

  const getData = () => {
      axios.get('https://enthouse.azurewebsites.net')
      .then(response => {
          setMotorStatus(response.data.engine.Motor_ON)
          setWaterLevel(response.data.water.Water_Level)
          console.log('motor: ' + response.data.engine.Motor_ON)
          console.log('level: ' + response.data.water.Water_Level)
      })
      .catch(error => {
        console.error(error);
      });
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
      getData()
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#219BD3', '#0C588A']}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{flex: 1}}
      >
        <Header />
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            >
                <View style={styles.cardContainer}>
                    <Card 
                        icon="engine" 
                        title="Motor" 
                        desc="Motor söndürülmüş vəziyyətdədir." 
                        currentStatus={motorStatus === 1 ? 'on' : 'off'}
                    />

                    <Card 
                        icon="pool" 
                        title="Hovuz" 
                        desc="Su sərfiyyatı:" 
                        currentStatus={`waterLevel-${waterLevel}`}
                        waterConsumption="125l / san"
                    />

                    <Card 
                        icon="areaIrrigaton" 
                        title="Ərazi sulanması" 
                        // desc="Su sərfiyyatı:" 
                        currentStatus="toWater"
                        // waterConsumption="125l / san"
                    />
                    
                    
                </View>
            </ScrollView>
        </View>
        
        {/* <FooterNav navigation={navigation} /> */}
      </LinearGradient>
    </View>
  )
}

export default Home