import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Modal, Pressable, useContext, Image } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../navigation/AuthProvider'



const ModalSurvey2 = ({ modalSurvey2, setModalSurvey2, modalWinSur, setModalWinSur, winnings, user, totalMoney, setTotalMoney, setWinnings }) => {



    const sendSurveyDataF2 = () => {

        firestore()
            .collection('Survey')
            .add({
                name: user.uid,
                period: 30,
                erVisit: false,
            })
            .then(() => {
                console.log('User survey added!');
                setModalSurvey2(false)
                setTotalMoney(totalMoney + 1.0)
                setWinnings(1.00)
                setModalWinSur(!modalWinSur)
            });
    }

    const sendSurveyDataT2 = () => {
        firestore()
            .collection('Survey')
            .add({
                name: user.uid,
                period: 30,
                erVisit: true,
            })
            .then(() => {
                console.log('User survey added!');
                setModalSurvey2(false)
                setTotalMoney(totalMoney + 1.0)
                setWinnings(1.00)
                setModalWinSur(true)
            });
    }

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalSurvey2}
        >
            <View style={styles.modalView2}>

                <View style={styles.logoHolder}>

                    <Image source={require('../assets/liquidLogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
                <Text style={styles.congrat}>Survey!</Text>
                <Text style={styles.congratMoney}>
                    Have you been to the Emergency Room for
                    </Text>
                <Text style={styles.congratMoney}>
                    FLUID OVERLOAD
                    </Text>
                <View style={styles.congratTextHold}>
                    <Text style={styles.congratText}>in the last 30 days?</Text>
                </View>
                <View style={styles.answerHolder}>
                    <Pressable
                        style={styles.noButton}
                        onPress={() => sendSurveyDataF2()}
                    >
                        <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold' }}>NO</Text>
                    </Pressable>
                    <Pressable
                        style={styles.okButton}
                        onPress={() => sendSurveyDataT2()}
                    >
                        <Text style={{ fontSize: 36, color: 'white', fontWeight: 'bold' }}>YES</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>

    )
}

export default ModalSurvey2

const styles = StyleSheet.create({
    logoHolder: {
        height: '25%',
        width: '50%',
    },
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',

        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
        zIndex: 199
    },
    task: {
        paddingBottom: 10,
        paddingLeft: 10,
        alignItems: 'center',
        width: 'auto',

        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    }, congrat: {
        fontSize: 48,
        color: '#eca400',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    congratMoney: {
        fontSize: 36,
        paddingVertical: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'

    },
    congratText: {
        fontSize: 30,
        width: '50%',
        fontWeight: 'bold'
    },
    congratWarning: {
        fontSize: 16,
        marginTop: -20
    },
    congratButton: {
        width: '90%',
        height: '10%',
        backgroundColor: '#4facfe',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,

    },

    modalView2: {
        display: 'flex',
        backgroundColor: "white",
        alignItems: "center",
        width: '100%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',

    },
    okButton: {
        borderWidth: 2,
        backgroundColor: '#4facfe',
        borderColor: 'grey',
        borderRadius: 9,
        width: '35%',
        alignItems: 'center',
    },
    noButton: {
        // borderWidth: 2,
        // borderColor: 'grey',
        // borderRadius: 9,
        width: '35%',
        alignItems: 'center',

    },
    answerHolder: {
        width: '100%',
        fontSize: 44,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }

})