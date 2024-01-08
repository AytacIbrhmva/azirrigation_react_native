import { View, Text, StyleSheet, Button, Platform, TouchableOpacity} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TimePicker = ({setTimer, showTime, setShowTime, workingStatus}) => {
    const [newDate, setNewDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState()
    const [resultData, setResultData] = useState({
        working: 0,
        minutes: 0
    })

    const [timeMin, setTimeMin] = useState()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || newDate;
        if (Platform.OS === 'android') {
            setShow(false);
            setShowTime(false)
        }
        let tempDate = new Date(currentDate);
        let hours = tempDate.getHours()
        let minutes = tempDate.getMinutes()
        if(hours === 0 && minutes === 0) {
            setTimer(null)
        } 
        setTimer(3600 * hours + 60 * minutes)

        if(minutes) {
            setTimeMin(minutes)
        }

        // console.log('hours: ' + hours);
        // console.log('minutes: ' + minutes);
    }

    const postData = (data) => {
        console.log('data post:' + data);
        axios.post('https://enthouse.azurewebsites.net/post',data)
        .then(response => {
            console.log('success');
            // setEngine({
            //   status:response.data.engine.Motor_ON
            // })
          })
          .catch(error => {
            console.error(error);
          });
    }

    useEffect(() => {
        if(workingStatus === true && timeMin) {
            postData({Motor_OK:1,time:timeMin})
            console.log('result data: ' + timeMin + ' on: ' + workingStatus);
        } else {
            setTimeMin(0)
            console.log('result data: ' + timeMin + ' on: ' + workingStatus);
        }
    }, [workingStatus])

    useEffect(() => {
        setShow(showTime)
        setMode(showTime && 'time')
    }, [showTime])

  return (
    <View style={{position: 'absolute', width: '100%'}}> 
        {show && Platform.OS === 'android' && (
            <DateTimePicker 
                testID='dateTimePicker'
                value={newDate}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
            />
        )}

        {show &&  Platform.OS === 'ios' && (
            <View>
                <RNDateTimePicker 
                    style={{backgroundColor: '#fff'}}
                    mode="countdown"  
                    value={newDate}  
                    display="spinner" 
                    timeZoneOffsetInSeconds={3600}
                    onChange={onChange}
                />
                <TouchableOpacity onPress={() => 
                {
                    setShow(false);
                    setShowTime(false)
                }} style={styles.okBtn}>
                    <Text style={styles.okText}>Close</Text>
                </TouchableOpacity> 
            </View>
        )}

    </View>
  )
}

const styles = StyleSheet.create({
    okBtn: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#219BD3',
        width: '100%',
        paddingVertical: 10
    },
    okText: {
        fontSize: 20,
        textAlign: 'center',
    }
})

export default TimePicker