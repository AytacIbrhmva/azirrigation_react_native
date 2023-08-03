import React from 'react'
import {View, Pressable, Text} from 'react-native'
import { EngineIconSmall, PoolIconSmall, AreaIrrigationIconSmall, TickIcon} from '../../../assets/icons/icons';
import styles from './card.style';


const Card = ({title, desc, time}) => {
  return (
    <View style={styles.card}>
        <View style={styles.cardLeft}>
        <View style={styles.cardIconBg}>
            {title == 'Motor' &&  <EngineIconSmall />}
            {title == 'Hovuz' &&  <PoolIconSmall />}
            {title == 'Ərazi sulanması' &&  <AreaIrrigationIconSmall />}
            {title == 'Tamamlandı' &&  <TickIcon />}
        </View>

        <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDesc}>{desc}</Text>
        </View>
        </View>

        <View style={styles.cardRight}>
            <Text style={styles.time}>{time}</Text>
        </View>
    </View>
)
}

export default Card

