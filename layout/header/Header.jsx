import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View} from 'react-native'
import styles from './header.style'
import { LogoIcon, OnOffIcon } from '../../assets/icons/icons'
import CountDown from 'react-native-countdown-component'
import TimePicker from './timePicker/TimePicker'
import { SFProText } from "../../assets/fontName/font"

const Header = () => {
  const [working, setWorking] = useState(false)
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const startClick = () => {
      if(working === false) {
        setWorking(true)
        setRunning(true)
      } else {
        setTimer(0)
        setTimeout(() => {
          setTimer(null)
        }, 100);
        setWorking(false)
        setRunning(false)
      }
  }

  useEffect(() => {
      setTimer(timer)
      setTimeout(() => {
        setTimer(0)
      }, 100);
      // console.log('timer countdown: ' + timer);
  }, [timer])

  return (
    <View style={styles.container}>
      <LogoIcon />
      <TouchableOpacity onPress={startClick} style={styles.onofIcon(working ? 'rgba(47, 166, 64, 0.9)' : 'rgba(223, 58, 56, 0.9)')}>
        <OnOffIcon />
      </TouchableOpacity>
      <CountDown 
        onPress={() => setShowTime(!working && true)}
        id='0'
        style={{marginTop: -40}}
        size={30}
        until={timer}
        onFinish={() => setWorking(false)}
        digitStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#fff', fontSize: 20, fontFamily: `${SFProText}-Medium`, fontWeight: 400}}
        separatorStyle={{color: '#fff', fontSize: 20}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        running={running}
      />

      <TimePicker 
      setTimer={setTimer} 
      setShowTime={setShowTime} 
      showTime={showTime}
      workingStatus={working}
      />
    </View>
  )
}

export default Header;