import React from 'react'
import {View, Pressable, Text, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from './notifications.style';
import FooterNav from '../../layout/footer/FooterNav';
import NotificationCard from './card/card';


const Notifications = ({navigation}) => {
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
          <Text style={styles.title}>Bildirişlər</Text>

          <ScrollView>
            <View style={styles.cardContainer}>
              <NotificationCard
                title="Motor"
                desc="Motorda texniki nasazlıq var."
                time="21:36"
              />

              <NotificationCard
                title="Hovuz"
                desc="Hovuzda su azalıb."
                time="Dünən"
              />

              <NotificationCard
                title="Ərazi sulanması"
                desc="Ərazi suvarılmır. Boru və ya krantlarda nasazlıq var"
                time="21.03.21"
              />

              <NotificationCard
                title="Tamamlandı"
                desc="Ərazi suvarılması tamamlandı."
                time="Dünən"
              />

              <NotificationCard
                title="Motor"
                desc="Motorda texniki nasazlıq var."
                time="21:36"
              />

              <NotificationCard
                title="Hovuz"
                desc="Hovuzda su azalıb."
                time="Dünən"
              />

              <NotificationCard
                title="Ərazi sulanması"
                desc="Ərazi suvarılmır. Boru və ya krantlarda nasazlıq var"
                time="21.03.21"
              />

              <NotificationCard
                title="Tamamlandı"
                desc="Ərazi suvarılması tamamlandı."
                time="Dünən"
              />
            </View>
          </ScrollView>

       
        </View> 

        {/* <FooterNav  navigation={navigation}/> */}
        </LinearGradient>
    </View>

  )
}

export default Notifications

