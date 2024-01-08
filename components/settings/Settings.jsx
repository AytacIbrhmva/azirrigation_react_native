import React, { useState } from 'react'
import {View, Pressable, Text, ScrollView, Switch} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from './settings.style';
import FooterNav from '../../layout/footer/FooterNav';
import { ArrowRightIcon } from '../../assets/icons/icons';


const Settings = ({navigation}) => {

  const [activeBtn, setActiveBtn] = useState('litr')
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };


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
          <Text style={styles.title}>Parametrlər</Text>

          <ScrollView>
            <View style={styles.cardContainer}>
              <View style={styles.headCard}>
                <Text style={styles.cardTitle}>Su ölçü vahidi</Text>
                <View style={styles.cardBottom}>
                  <Pressable onPress={() => setActiveBtn('litr')}>
                    <Text style={activeBtn == 'litr' ? styles.cardLeftBtnActive : styles.cardLeftBtn}>Litr</Text>
                  </Pressable>

                  <Pressable onPress={() => setActiveBtn('kub')}>
                    <Text style={activeBtn == 'kub' ? styles.cardRightBtnActive : styles.cardRightBtn}>Kub metr</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle}>Su sərfiyyatı:</Text>
                  <Text style={styles.cardTitleBold}>8000 L</Text>
                </View>

                <Pressable>
                  <ArrowRightIcon />
                </Pressable>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Bildirişlər</Text>

                <Pressable>
                  <Switch 
                   onValueChange={toggleSwitch}
                   value={switchValue}
                   thumbColor={'#27A9E1'}
                   trackColor={{false: '#27A9E1', true: '#fff'}}
                  />
                </Pressable>
              </View>

              <View>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>İstifadə qaydaları</Text>

                  <Pressable>
                    <ArrowRightIcon />
                  </Pressable>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Haqqımızda</Text>

                  <Pressable>
                    <ArrowRightIcon />
                  </Pressable>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Region</Text>

                  <Pressable>
                    <ArrowRightIcon />
                  </Pressable>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Dil</Text>

                  <Pressable>
                    <ArrowRightIcon />
                  </Pressable>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Məzənnə</Text>

                  <Pressable>
                    <ArrowRightIcon />
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </View> 

        {/* <FooterNav  navigation={navigation}/> */}
        </LinearGradient>
    </View>

  )
}

export default Settings

