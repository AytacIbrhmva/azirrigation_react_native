import React, { useEffect, useState } from 'react'
import {View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../../layout/header/Header';
import { EngineIcon, PoolIcon, AreaIrrigationIcon } from '../../../assets/icons/icons';
import styles from './card.style';

const Card = ({icon, title, desc, currentStatus, waterConsumption}) => {

    const [btnBgColor, setBtnBgColor] = useState('rgba(113, 113, 113, 0.5)')

    useEffect(() => {
        setBtnBgColor(() => {
            switch(currentStatus) {
                case 'on':
                    return 'rgba(47, 166, 64, 0.6)';
                case 'off':
                    return 'rgba(113, 113, 113, 0.5)';
                case 'waterLevel-3':
                    return ' rgba(12, 88, 138, 0.6)';
                case 'waterLevel-2':
                    return ' rgba(12, 88, 138, 0.6)';
                case 'waterLevel-1':
                    return 'rgba(113, 113, 113, 0.5)';
                case 'toWater':
                    return 'rgba(33, 71, 79, 0.6)';
                case 'notToWater':
                    return 'rgba(113, 113, 113, 0.5)';
                case 'notworking':
                    return 'rgba(238, 68, 57, 0.8)';
                default:
                    return 'rgba(238, 68, 57, 0.8)';
            }
        })
    }, [currentStatus])

  return (
    <View style={styles.card}>
        <View style={styles.cardTop}>
            {icon == 'engine' && <EngineIcon />}
            {icon == 'pool' && <PoolIcon />}
            {icon == 'areaIrrigaton' && <AreaIrrigationIcon />}
            
            <Text style={styles.cardTitle}>{title}</Text>
        </View>

        <View style={styles.cardBody}>
            <Text style={styles.cardDesc}>{desc}</Text>
            <Text style={styles.cardDescBold}>{waterConsumption}</Text>
        </View>

        <View style={styles.cardBottom}>
            <Text style={styles.cardBottomText(btnBgColor)}>
                {currentStatus == 'on' && "İşləyir"}
                {currentStatus == 'off' &&  "Söndürülüb" }
               
                {currentStatus == 'waterLevel-3' && "Doludur"}
                {currentStatus == 'waterLevel-2' && "su orta səviyyədədi"}
                {currentStatus == 'waterLevel-1' && "Boşdur"}

                {currentStatus == 'notToWater' && "Suvarılmır"}
                {currentStatus == 'toWater' && "Suvarılır"}

                {currentStatus == 'notworking' && "İşləmir"}
            </Text>
        </View>
    </View>

  )
}

export default Card

