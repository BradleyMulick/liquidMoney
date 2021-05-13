import React, { useContext, useEffect, useState } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { View, Text, StyleSheet, Button, FlatList, ScrollView, Alert, TouchableHighlight, Pressable, Modal, Image, TextInput, TouchableOpacity } from 'react-native'
import PushNotification from "react-native-push-notification";

import { AuthContext } from '../navigation/AuthProvider'
import { FluidContext } from '../navigation/FluidProvider'
import { LogsContext } from '../navigation/LogsProvider'
import FormButton from '../components/FormButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import MatCom from "react-native-vector-icons/MaterialCommunityIcons"
// import uuid from 'uuid'
import uuid from 'react-native-uuid';

import firestore from '@react-native-firebase/firestore'

import * as firebase from 'firebase'


import Modal1 from '../components/Modal1';
import ModalWin from '../components/ModalWin';
import ModalFluidMax from '../components/ModalFluidMax';
import ModalNoWin from '../components/ModalNoWin';
import ModalSnack from '../components/ModalSnack';
import ModalIceCream from '../components/ModalIceCream';
import ModalSoda from '../components/ModalSoda';
import ModalBowl from '../components/ModalBowl';
import ModalCup from '../components/ModalCup';
import ModalFruit from '../components/ModalFruit';
import ModalWine from '../components/ModalWine';
import ModalBeer from '../components/ModalBeer';
import ModalMedication from '../components/ModalMedication';
import ModalMilk from '../components/ModalMilk';
import ModalRando from '../components/ModalRando';
import ModalSurvey from '../components/ModalSurvey';
import ModalSurvey2 from '../components/ModalSurvey2';
import { set } from 'react-native-reanimated';
import ModalWinSur from '../components/ModalWinSur';
import ModalNoMoney from '../components/ModalNoMoney';

const STORAGE_KEY = '@save_age'

let config = {
    apiKey: "AIzaSyC5_d0AnjiLkK41px5wTWjPTP-mjrmsWOw",
    authDomain: "liquidmon-30fc2.firebaseapp.com",
    projectId: "liquidmon-30fc2",
    storageBucket: "liquidmon-30fc2.appspot.com",
    messagingSenderId: "605205477691"
};


const HomeScreen = ({ navigation, convertOn, setConvertOn }) => {





    const { user, logout } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);

    const [allLiquids, setAllLiquids] = useState([])
    const [maxFluids] = useContext(FluidContext)

    const [firstLogin, setFirstLogin] = useState(null)
    const [midnight, setMidnight] = useState(0)

    const [allLogs, setAllLogs] = useContext(LogsContext)

    const [totalPerccy, setTotalPerccy] = useState('0%')
    const [fluidLevel, setFluidLevel] = useState(0);
    const [dailyTotal, setDailyTotal] = useState(0)
    const [todaysDate, setTodaysDate] = useState('')

    const [isItOn, setIsItOn] = useState(false)
    const [modal1, setModal1] = useState(false)

    const [modalSnack, setModalSnack] = useState(false)
    const [modalIceCream, setModalIceCream] = useState(false)
    const [modalSoda, setModalSoda] = useState(false)
    const [modalBowl, setModalBowl] = useState(false)
    const [modalCup, setModalCup] = useState(false)
    const [modalFruit, setModalFruit] = useState(false)
    const [modalWine, setModalWine] = useState(false)
    const [modalBeer, setModalBeer] = useState(false)
    const [modalMedication, setModalMedication] = useState(false)
    const [modalMilk, setModalMilk] = useState(false)
    const [modalRando, setModalRando] = useState(false)

    const [picto, setPicto] = useState('')

    const [modalWin, setModalWin] = useState(false)
    const [modalWinSur, setModalWinSur] = useState(false)
    const [modalNoWin, setModalNoWin] = useState(false)
    const [modalNoMoney, setModalNoMoney] = useState(false)

    const [modalFluidMax, setModalFluidMax] = useState(false)

    const [liquidType, setLiquidType] = useState('coffee')
    const [fluidName, setFluidName] = useState('Coffee')

    const [overloadTracker, setOverloadTracker] = useState(false)
    const [overloadColor, setOverloadColor] = useState('#4facfe')
    const [overloadBar, setOverloadBar] = useState('black')

    const [firstSet, setFirstSet] = useState('')
    const [specialKEy, setSpecialKey] = useState(0)

    const [modalVisible2, setModalVisible2] = useState(false);
    const [totalMoney, setTotalMoney] = useState(0)
    const [winnings, setWinnings] = useState(0)
    const [dailyMoneyTotal, setDailyMoneyTotal] = useState(.50)

    const [modalSurvey, setModalSurvey] = useState(false)
    const [modalSurvey2, setModalSurvey2] = useState(false)


    const [measure, setMeasure] = useState(false)


    // PushNotification.localNotificationSchedule({
    //     channelId: "channel-i",
    //     channelName: "My channel",
    //     //... You can use all the options from localNotifications
    //     message: "My Notification Message", // (required)
    //     date: new Date(Date.now() + 10 * 1000), // in 60 secs
    //     allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    // });


    const sendSurveyDataF = () => {
        console.log("WORKK")
        firestore()
            .collection('Survey')
            .add({
                name: user.uid,
                period: 12,
                erVisit: false,
            })
            .then(() => {
                console.log('User survey added!');
                setModalSurvey(!modalSurvey)
                setModalSurvey2(false)
            });
    }




    const theMidnight = () => {
        let endTime = new Date(new Date().setHours(11, 30, 59, 0))

    }

    // const setterMidnight = async () => {
    //     try {
    //         let d = new Date()
    //         let d2 = (d.getDate() + 1)

    //         let stringMidnight = JSON.stringify(d2)
    //         await AsyncStorage.setItem("midnight", stringMidnight)
    //         console.log(stringMidnight + "Midnight HAS CHANGED")

    //         console.log("SET NEW MIDDDDY" + stringMidnight)
    //     } catch (e) {
    //         alert('Failed saving MIDNIGHT logs to the storage')
    //     }
    // }

    // const loadMidnight = async () => {
    //     try {
    //         await AsyncStorage.getItem("midnight").then(data => {
    //             if (data !== null) {

    //                 console.log(data + "retrieverrrr")
    //                 let parser = JSON.parse(data)
    //                 setMidnight(20)

    //             } else {
    //                 setterMidnight()
    //             }
    //         })
    //     } catch (e) {
    //         alert('Failed to fetch the data from storage')
    //     }
    // }


    const resetDay = async () => {
        const d = await (new Date())
        const newDay = await d.getDate()
        const middy = await midnight
        console.log(newDay + "TODAY ISSSSSSS")
        console.log(midnight + "Weshallll sweeee")
        console.log(midnight <= newDay)
        console.log(newDay > midnight)
        if (newDay > midnight) {
            const jsonDaily = JSON.stringify(0)
            const jsonMoney = JSON.stringify(.50)
            // await AsyncStorage.setItem("dailyTotal", jsonDaily)
            // await AsyncStorage.setItem("dailyMoney", jsonMoney)
            // setterMidnight()
            // setDailyTotal(0)
            // setDailyMoneyTotal(.50)
            console.log("reset the datas for ya")
        }
    }


    const clearNightStorage = async () => {

        let d = new Date()
        let e = parseInt(d.getMonth() + 1)
        let f = new Date()
        let g = parseInt(f.getDate())
        console.log(d + "yhis is ggggggggg")
        let today = new Date()
        today.setUTCHours(0, 0, 0, 0)
        console.log(today)

        AsyncStorage.getItem('theDay').then(value => {
            let newVal = JSON.parse(value)
            console.log(newVal + "hopefullly this is a numberrrr ")
            if (newVal == null) {
                AsyncStorage.setItem('theDay', JSON.stringify(g))
                console.log("no day set, setting day")
            }
            else if (newVal == g) {
                console.log("do nothing")
            } else if (newVal !== g) {
                AsyncStorage.setItem('theDay', JSON.stringify(g))
                console.log("new day set and cleared liqs")
                // AsyncStorage.removeItem('dailyTotal');
                // AsyncStorage.removeItem("dailyMoney");
                AsyncStorage.setItem('dailyTotal', JSON.stringify(0))
                setDailyTotal(0)
                setDailyMoneyTotal(.50)
            }
        })

        console.log(g)



        // let today = new Date()
        // today.setHours(0, 0, 0, 0)
        // const date = new Date(value)
        // console.log(today + "clear the night atoregwa beasttt " + date)
        // const value = await AsyncStorage.getItem('theDay')
        // if (!!value) {
        //     AsyncStorage.setItem('theDay', JSON.stringify(today.getTime()))
        //     console.log("no day set, setting day")
        // }
        // else {
        //     const date = new Date(value)
        //     console.log(date + "what are thery equal" + today)
        //     if (today.getTime() !== date.getTime()) {
        //         console.log("day WAS SET AND WE JUST RESET IT")
        //         AsyncStorage.setItem('theDay', JSON.stringify(today.getTime()))
        //         // AsyncStorage.removeItem('dailyTotal');
        //         AsyncStorage.removeItem("dailyMoney");
        //         setDailyMoneyTotal(.50)
        //     }
        // }

        // else if (newVal == g) {
        //     console.log("do nothing")
        // } else if (newVal !== g) {
        //     AsyncStorage.setItem('theDay', JSON.stringify(today.getTime()))
        //     console.log("new day set and cleared liqs")
        //     AsyncStorage.removeItem('dailyTotal');
        //     AsyncStorage.removeItem("dailyMoney");
        //     setDailyMoneyTotal(.50)
        //     setDailyTotal(0)
        // }

        // console.log(g)


    }


    useEffect(() => {
        // clearNightStorage()
    }, [])

    useEffect(() => {
        // loadMidnight()
        getTheDate()
    }, [])

    useEffect(() => {

        console.log(midnight + "IS IT TIMING????")
    }, [midnight])



    useEffect(() => {
        let currentTime = new Date
        let superDate = new Date(currentTime)
        superDate.setMonth(superDate.getMonth() + 1)
        let superYear = currentTime.getFullYear()
        let superMonth = superDate.getMonth() + 1
        superMonth = ("0" + superMonth).slice(-2)
        let superDay = currentTime.getDate()
        superDay = ('0' + superDay).slice(-2)
        let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")

        let superAll = (superYear + '-' + superMonth + '-' + superDay)
        console.log(superAll)
        console.log(superDay + "day of supers")

        console.log(superDate.getMonth() + "month of the super date")
        AsyncStorage.getItem('alreadyLoggedIn').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLoggedIn', 'true')
                AsyncStorage.setItem('rewardDate', superAll)
                setFirstLogin(true)
                setModalSurvey(!modalSurvey)
            } else {

                setFirstLogin(false)
                AsyncStorage.getItem('rewardDate').then(val => {
                    console.log(val)
                    let freshDate = new Date(val)
                    console.log(freshDate + "very importtant date right here dude")
                    if (freshDate <= currentTime) {
                        setModalSurvey(!modalSurvey)
                        AsyncStorage.setItem('rewardDate', superAll)
                    }
                })
            }
        })

    }, [])



    const getTheDate = () => {
        let currentTime = new Date
        let superDate = new Date(currentTime)
        superDate.setMonth(superDate.getMonth() + 1)
        console.log(superDate + "SU{PER DATE")
        const futureDate = new Date("2021-06-06")
        let [month, date, year] = new Date().toLocaleDateString("en-US").split("/")
        console.log(month + date + year)
        console.log(currentTime < futureDate)
        console.log(futureDate + "the super future date im saving")
        console.log(currentTime + "supposed to be midnight")
    }


    const saveLogs = async () => {
        try {
            console.log(allLogs.length + "save function")
            await AsyncStorage.setItem('allTheLogs', JSON.stringify(allLogs))
            setFluidLevel(0)
            // clearNightStorage()
        } catch (e) {
            alert('Failed to save the logs to the storage')
        }
    }


    const showDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setTodaysDate(month + '/' + date + '/' + year);
    }

    const handleChange = fluids => setFluidLevel(fluids)

    const handleAddTodo = () => {


        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModal1(!modal1)

            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }


    const handleAddTodoSnack = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalSnack(!modalSnack)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoIceCream = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalIceCream(!modalIceCream)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoSoda = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalSoda(!modalSoda)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoBowl = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalBowl(!modalBowl)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoCup = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalCup(!modalCup)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoFruit = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalFruit(!modalFruit)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoWine = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalWine(!modalWine)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoBeer = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalBeer(!modalBeer)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }

        }
    }
    const handleAddTodoMedication = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalMedication(!modalMedication)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoMilk = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalMilk(!modalMilk)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }
    const handleAddTodoRando = () => {
        if (fluidLevel > 0) {
            total()
            let copy = [...allLogs];
            const date = new Date().toString()
            copy = [...copy, { key: uuid.v4(), id: uuid.v4(), task: fluidLevel, isEdit: null, editText: '', date: todaysDate, liquidType: liquidType, fluidName: fluidName }];
            setAllLogs(copy)

            setModalRando(!modalRando)
            if (dailyMoneyTotal > 0) {
                rollDie()
            } else {
                setModalNoWin(true)
            }
        }
    }

    const handleDeleteTodo = (index) => {
        let list = allLogs
        list.splice(index, 1)
        setAllLogs(list)
    }

    const total = () => {
        setDailyTotal(parseInt(dailyTotal) + parseInt(fluidLevel))
    }

    const dailyDough = () => {


        if (convertOn === false) {

            const percenty = parseInt(dailyTotal) / parseInt(maxFluids)
            const totPercenty = percenty * 100
            setTotalPerccy(totPercenty + '%')
            if (totPercenty >= 100) {
                setOverloadTracker(true)
                setOverloadColor('red')
                setOverloadBar('red')
                setModalFluidMax(true)
                // setModalVisible4(true)
            } else {
                setOverloadColor('#4facfe')
                setOverloadBar('black')
            }
        } else if (convertOn === true) {
            const percenty = parseInt((dailyTotal / 29.574).toFixed(0)) / parseInt(maxFluids)
            const totPercenty = percenty * 100
            setTotalPerccy(totPercenty + '%')
            if (totPercenty >= 100) {
                setOverloadTracker(true)
                setOverloadColor('red')
                setOverloadBar('red')
                setModalFluidMax(true)
                // setModalVisible4(true)
            } else {
                setOverloadColor('#4facfe')
                setOverloadBar('black')
            }
        }

        // if (totPercenty >= 100) {
        //     setOverloadTracker(true)
        //     setOverloadColor('red')
        //     setOverloadBar('red')
        //     setModalFluidMax(true)
        //     // setModalVisible4(true)
        // } else {
        //     setOverloadColor('#4facfe')
        //     setOverloadBar('black')
        // }
    }

    const rollDie = () => {

        let roll = Math.floor(Math.random() * 2) + 1
        if (roll === 2) {
            let secondRoll = Math.floor(Math.random() * 100) + 1
            if (secondRoll < 70) {
                // setModalVisible2(true)
                setModalWin(true)
                setWinnings(20)
                setTotalMoney(totalMoney + .20)
                setDailyMoneyTotal(dailyMoneyTotal - .20)
            } else if (secondRoll > 60 || secondRoll < 90) {
                let midRoll = Math.floor(Math.random() * 31) + 20
                setWinnings(midRoll)
                // setModalVisible2(true)
                setModalWin(true)
                const num = ((midRoll / 100))
                setTotalMoney(totalMoney + num)
                setDailyMoneyTotal(dailyMoneyTotal - num)
            } else if (secondRoll > 90) {
                // setModalVisible2(true)
                setModalWin(true)
                setWinnings(50)
                setTotalMoney(totalMoney + .50)
                setDailyMoneyTotal(dailyMoneyTotal - .50)
            }
        } else {
            setModalNoWin(true)
        }
    }

    const increase = () => {
        setFluidLevel(parseInt(fluidLevel + 1))
    }

    const decrease = () => {
        setFluidLevel(parseInt(fluidLevel - 1))
    }

    const cancelLiq = () => {
        setFluidLevel(0)
        setModal1(!modal1)
    }
    const cancelLiqSnack = () => {
        setFluidLevel(0)
        setModalSnack(!modalSnack)
    }


    const clearLiquids = () => {
        AsyncStorage.setItem("storedLiquid", JSON.stringify([])).then(() => {
            setAllLiquids([])
        })
    }

    const liquidTypeSetter = (prop) => {
        setModal1(true)
        setLiquidType(prop)
    }

    const liquidTypeSetterCoffee = (prop) => {
        setModal1(true)
        setLiquidType(prop)
        setFluidName('Coffee')
    }
    const liquidTypeSetterSnack = (prop) => {
        setModalSnack(true)
        setLiquidType(prop)
        setFluidName('Snack')
    }
    const liquidTypeSetterIceCream = (prop) => {
        setModalIceCream(true)
        setLiquidType(prop)
        setFluidName('Ice-Cream')
    }
    const liquidTypeSetterSoda = (prop) => {
        setModalSoda(true)
        setLiquidType(prop)
        setFluidName('Can')
    }
    const liquidTypeSetterBowl = (prop) => {
        setModalBowl(true)
        setLiquidType(prop)
        setFluidName('Bowl')
    }
    const liquidTypeSetterCup = (prop) => {
        setModalCup(true)
        setLiquidType(prop)
        setFluidName('Cup')
    }
    const liquidTypeSetterFruit = (prop) => {
        setModalFruit(true)
        setLiquidType(prop)
        setFluidName('Fruit')
    }
    const liquidTypeSetterWine = (prop) => {
        setModalWine(true)
        setLiquidType(prop)
        setFluidName('Wine')
    }
    const liquidTypeSetterBeer = (prop) => {
        setModalBeer(true)
        setLiquidType(prop)
        setFluidName('Beer')
    }
    const liquidTypeSetterMedication = (prop) => {
        setModalMedication(true)
        setLiquidType(prop)
        setFluidName('Medication')
    }
    const liquidTypeSetterMilk = (prop) => {
        setModalMilk(true)
        setLiquidType(prop)
        setFluidName('Milk/Juice')
    }
    const liquidTypeSetterRando = (prop) => {
        setModalRando(true)
        setLiquidType(prop)
        setFluidName('Liquid')
    }

    const loadTodo = () => {
        try {
            AsyncStorage.getItem("allTheLogs").then(data => {
                if (data !== null) {
                    setAllLogs(JSON.parse(data))
                    console.log(allLogs + "hi")
                }
            })
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }



    // ############################################# LOAD MONEY & SAVE MONEY 
    const saveMoney = async () => {

        try {
            const jsonMoney = JSON.stringify(totalMoney)
            await AsyncStorage.setItem("totalMoney", jsonMoney)
            console.log(dailyTotal + "save money mon")
        } catch (e) {
            alert('Failed saving DAILLLLLY logs to the storage')
        }
    }


    const loadMoney = () => {
        try {
            AsyncStorage.getItem("totalMoney").then(data => {
                if (data !== null) {
                    setTotalMoney(JSON.parse(data))
                    console.log(totalMoney + "hi daily")
                } else {
                    setTotalMoney(0)
                }
            })
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect(() => {
        loadMoney()

    }, [])

    useEffect(() => {
        saveMoney()
    }, [totalMoney])

    useEffect(() => {
        loadDaily()

    }, [convertOn])


    const saveDailyMoneyTotal = async () => {
        try {
            const jsonMoneyT = JSON.stringify(dailyMoneyTotal)
            await AsyncStorage.setItem("dailyMoney", jsonMoneyT)
            console.log(dailyMoneyTotal + "DAILY MONEY TOTAL HAS CHANGED")
        } catch (e) {
            alert('Failed saving DAILLLLLY logs to the storage')
        }
    }


    const loadDailyMoneyTotal = async () => {

        try {
            AsyncStorage.getItem("dailyMoney").then(data => {
                if (data !== null) {
                    setDailyMoneyTotal(JSON.parse(data))
                    console.log(dailyMoneyTotal + "daily money total loaded")
                } else {
                    setDailyMoneyTotal(.50)
                }
            })
        } catch (e) {
            alert('Failed to fetch the daily money total from storage')
        }
    }

    useEffect(() => {
        loadDailyMoneyTotal()
    }, [])

    useEffect(() => {
        saveDailyMoneyTotal()
    }, [dailyMoneyTotal])

    // ############################################# LOAD DAILY TOTAL & SAVE DAILY 


    const saveDaily = async () => {
        // added to try it out miight need to remove
        clearNightStorage()
        try {
            const jsonDaily = JSON.stringify(dailyTotal)
            await AsyncStorage.setItem("dailyTotal", jsonDaily)
            console.log(dailyTotal + "save function daily total mon")
        } catch (e) {
            alert('Failed saving DAILLLLLY logs to the storage')
        }
    }


    const loadDaily = async () => {
        // clearNightStorage()
        try {
            AsyncStorage.getItem("dailyTotal").then(data => {
                if (data !== null) {
                    setDailyTotal(JSON.parse(data))
                    console.log(dailyTotal + "hi daily")

                }
                else {

                    setDailyTotal(0)
                }
            })
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }


    const alertSetMax = async () => {
        try {
            AsyncStorage.getItem(STORAGE_KEY).then(data => {
                if (data == null) {
                    navigation.navigate('FluidMax')
                    console.log("just saw you need to set your fluid max")
                }
            })
        } catch (e) {
            alert('Failed to fetch the fluid max')
        }

    }

    const clearDailyMon = async () => {
        try {
            await AsyncStorage.removeItem('dailyTotal');
            await AsyncStorage.removeItem("dailyMoney");
            setDailyMoneyTotal(.50)
            setDailyTotal(0)
            console.log("worked")
            clearNightStorage()
        }
        catch {
            console.log("fudge")
        }
    }



    useEffect(() => {
        // alertSetMax()
        // addLog()
        loadTodo()
        // dailyDough()
        loadDaily()
        showDate()
        clearNightStorage()
        // getNotes()
    }, [])



    useEffect(() => {
        saveDaily()
        // alertSetMax()
        clearNightStorage()
    }, [dailyTotal])


    useEffect(() => {
        saveLogs()
        // total()

    }, [allLogs])


    useEffect(() => {

        dailyDough()
    }, [convertOn])


    useEffect(() => {
        dailyDough()
    }, [dailyTotal, maxFluids])



    return (

        <View style={styles.container}>

            {modalWin === true ?
                <ModalWin modalWin={modalWin} setModalWin={setModalWin} setModalSurvey2={setModalSurvey2} winnings={winnings} />
                : null}
            {modalWinSur === true ?
                <ModalWinSur modalWinSur={modalWinSur} setModalWinSur={setModalWinSur} setModalSurvey2={setModalSurvey2} winnings={winnings} />
                : null}
            {modalFluidMax === true ?
                <ModalFluidMax modalFluidMax={modalFluidMax} setModalFluidMax={setModalFluidMax} />
                : null}
            {modalNoWin === true ?
                <ModalNoWin modalNoWin={modalNoWin} setModalNoWin={setModalNoWin} />
                : null}
            {modalNoMoney === true ?
                <ModalNoMoney modalNoMoney={modalNoMoney} setModalNoMoney={setModalNoMoney} />
                : null}

            {modalSurvey === true ?
                <ModalSurvey modalSurvey={modalSurvey} setModalSurvey={setModalSurvey} modalSurvey2={modalSurvey2} setModalSurvey2={setModalSurvey2} user={user} />
                : null}
            {modalSurvey2 === true ?
                <ModalSurvey2 modalSurvey2={modalSurvey2} setModalSurvey2={setModalSurvey2} user={user} totalMoney={totalMoney} setTotalMoney={setTotalMoney} setWinnings={setWinnings} setModalWinSur={setModalWinSur} modalWinSur={modalWinSur} />
                : null}

            {modal1 === true ?
                <Modal1 modal1={modal1} convertOn={convertOn} fluidName={fluidName} setModal1={setModal1} fluidLevel={fluidLevel} setFluidLevel={setFluidLevel} handleAddTodo={handleAddTodo} allLogs={allLogs} cancelLiq={cancelLiq} increase={increase} decrease={decrease} liquidTypeSetter={liquidTypeSetter} liquidType={liquidType} />
                : null}
            {modalSnack === true ?
                <ModalSnack modalSnack={modalSnack} convertOn={convertOn} setFluidName={setFluidName} handleAddTodoSnack={handleAddTodoSnack} fluidName={fluidName} setModalSnack={setModalSnack} fluidLevel={fluidLevel} setFluidLevel={setFluidLevel} handleAddTodo={handleAddTodo} allLogs={allLogs} cancelLiqSnack={cancelLiqSnack} increase={increase} decrease={decrease} liquidTypeSetter={liquidTypeSetter} liquidType={liquidType} picto={picto} />
                : null}
            {modalIceCream === true ?
                <ModalIceCream modalIceCream={modalIceCream} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalIceCream={setModalIceCream} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoIceCream={handleAddTodoIceCream} allLogs={allLogs} />
                : null}
            {modalSoda === true ?
                <ModalSoda modalSoda={modalSoda} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalSoda={setModalSoda} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoSoda={handleAddTodoSoda} allLogs={allLogs} />
                : null}
            {modalBowl === true ?
                <ModalBowl modalBowl={modalBowl} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalBowl={setModalBowl} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoBowl={handleAddTodoBowl} allLogs={allLogs} />
                : null}
            {modalCup === true ?
                <ModalCup modalCup={modalCup} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalCup={setModalCup} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoCup={handleAddTodoCup} allLogs={allLogs} />
                : null}
            {modalFruit === true ?
                <ModalFruit modalFruit={modalFruit} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalFruit={setModalFruit} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoFruit={handleAddTodoFruit} allLogs={allLogs} />
                : null}
            {modalWine === true ?
                <ModalWine modalWine={modalWine} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalWine={setModalWine} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoWine={handleAddTodoWine} allLogs={allLogs} />
                : null}
            {modalBeer === true ?
                <ModalBeer modalBeer={modalBeer} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalBeer={setModalBeer} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoBeer={handleAddTodoBeer} allLogs={allLogs} />
                : null}
            {modalMedication === true ?
                <ModalMedication modalMedication={modalMedication} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalMedication={setModalMedication} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoMedication={handleAddTodoMedication} allLogs={allLogs} />
                : null}
            {modalMilk === true ?
                <ModalMilk modalMilk={modalMilk} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalMilk={setModalMilk} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoMilk={handleAddTodoMilk} allLogs={allLogs} />
                : null}
            {modalRando === true ?
                <ModalRando modalRando={modalRando} convertOn={convertOn} fluidLevel={fluidLevel} setFluidName={setFluidName} setFluidLevel={setFluidLevel} setModalRando={setModalRando} increase={increase} decrease={decrease} fluidName={fluidName} handleAddTodoRando={handleAddTodoRando} allLogs={allLogs} />
                : null}

            <View>
                <Text style={styles.totalMoney}>Rewards: ${totalMoney.toFixed(2)}</Text>
            </View>
            <View style={styles.icons}>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterCoffee('coffee')} underlayColor="white">
                        <Icon name="coffee" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterCup('cup')} underlayColor="white">
                        <MatCom name="cup" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterSoda('bottle-soda-classic-outline')} underlayColor="white">
                        <MatCom name="bottle-soda-classic-outline" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterFruit('fruit-watermelon')} underlayColor="white">
                        <MatCom name="fruit-watermelon" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} >
                    <Pressable onPress={() => liquidTypeSetterWine('glass-wine')} underlayColor="white">
                        <MatCom name="glass-wine" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterBeer('glass-mug-variant')} underlayColor="white">
                        <MatCom name="glass-mug-variant" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterSnack('bowl-outline')} underlayColor="white">
                        <MatCom name="bowl-outline" size={35} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box}>
                    <Pressable onPress={() => liquidTypeSetterBowl('bowl-mix')} underlayColor="white">
                        <MatCom name="bowl-mix" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterIceCream('ice-cream')} underlayColor="white">
                        <Font5 name="ice-cream" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterMedication('medical-bag')} underlayColor="white">
                        <MatCom name="medical-bag" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterMilk('cup-outline')} underlayColor="white">
                        <MatCom name="cup-outline" size={50} color="#4facfe" />
                    </Pressable>
                </View>
                <View style={styles.box} onPress={() => Alert.alert('Button Clicked')}>
                    <Pressable onPress={() => liquidTypeSetterRando('plus-circle')} underlayColor="white">
                        <MatCom name="plus-circle" size={50} color="#4facfe" />
                    </Pressable>
                </View>

            </View>
            <View style={styles.liquidHolder}>
                <View style={{ height: `${totalPerccy}`, backgroundColor: `${overloadColor}`, width: '100%', position: 'absolute', bottom: 0, borderTopWidth: 2, borderColor: 'black' }}></View>
            </View>


            {
                convertOn === false ?
                    <View style={styles.dailyTotalDisplay}>
                        <Text style={styles.dailyTotalText}>{dailyTotal} / {maxFluids} mL</Text>
                    </View>
                    :
                    <View style={styles.dailyTotalDisplay}>
                        {/* <Text style={styles.dailyTotalText}>{(dailyTotal / 29.574).toFixed(0)} / {(maxFluids / 29.574).toFixed(0)} oz</Text> */}
                        <Text style={styles.dailyTotalText}>{(dailyTotal / 29.574).toFixed(0)} / {maxFluids} oz</Text>
                    </View>
            }


            {/* <FormButton buttonTitle="Logout" onPress={() => logout()} /> */}
            <View style={{ width: '100%', height: '80%', position: 'absolute', bottom: 0, borderTopWidth: 2, borderTopColor: `${overloadBar}` }}>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebebeb",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        width: "50%",
        fontSize: 20,
        color: '#333333'
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        width: '90%',
        flexWrap: "wrap",
        height: '65%',
        borderColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .8,
        shadowRadius: 4,
        borderRadius: 4,
        margin: 10,
        paddingTop: 20,
        zIndex: 100,
    },
    box: {
        borderColor: '#707070',
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: 'white',
        height: '18%',
        width: '23%',
        margin: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalMoney: {
        fontSize: 36,
        zIndex: 1000,
        color: '#4facfe',
        paddingTop: 20,

    },
    dailyTotalDisplay: {
        height: 60,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eca400',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        zIndex: 100,
        marginBottom: '20%'
    },
    dailyTotalText: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold'
    },
    liquidHolder: {
        position: 'absolute',
        bottom: -1,
        height: '80%',
        width: '100%'
    },
})