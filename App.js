/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import Providers from './navigation'

import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const App = () => {

  const [isOn, setIsOn] = useState(true)

  const saveNotifs = async () => {
    try {
      const noti = JSON.stringify(isOn)
      await AsyncStorage.setItem("notifsOn", noti)
      console.log(noti + "save function daily total mon")
    } catch (e) {
      alert('Failed saving Notification status')
    }
  }

  const loadNotifs = () => {
    try {
      AsyncStorage.getItem("notifsOn").then(data => {
        if (data !== null) {
          setIsOn(JSON.parse(data))
          console.log(isOn + "set stored notification status")
        }
      })
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },

    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);

    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,
    requestPermissions: true,
  });

  const isNotificationsOn = () => {
    if (isOn === true) {
      PushNotification.createChannel(
        {
          channelId: "channel-i", // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
          playSound: false, // (optional) default: true
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: 4, // (optional) default: 4. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
      );

      console.log("notis set to true aby 555555555555>>>>>>>>>>>>")
    } else if (isOn === false) {

      PushNotification.abandonPermissions()
      console.log("NOTIIIIIIIS CANCELLLLLEDDDDDD")
    }
  }

  useEffect(() => {
    loadNotifs()
  }, [])

  useEffect(() => {
    isNotificationsOn()
    saveNotifs()
    console.log(isOn)
  }, [isOn])

  return <Providers isOn={isOn} setIsOn={setIsOn} />
};


export default App;
