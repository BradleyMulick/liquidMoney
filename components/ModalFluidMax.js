import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Modal, Pressable, Image } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalFluidMax = ({ modalFluidMax, setModalFluidMax }) => {





    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalFluidMax}

        >
            <View style={styles.modalContainer}>
                <View style={styles.modalBorder}>
                    <View style={styles.logoHolder}>

                        <Image source={require('../assets/liquidLogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>
                    <Text style={styles.alertText}>You have reached your Max Fluids for the day.</Text>
                    <Pressable
                        style={styles.alertButtContain}
                        onPress={() => setModalFluidMax(!modalFluidMax)}
                    ><Text style={styles.alertTextButton}>OK</Text></Pressable>
                </View>
            </View>

        </Modal>

    )
}

export default ModalFluidMax

const styles = StyleSheet.create({
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
    modalContainer: {
        backgroundColor: 'white',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBorder: {
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8
    },

    alertButtContain: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',

    },
    alertTextButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#4facfe',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderRadius: 8
    },
    alertText: {
        fontSize: 28,
        alignItems: 'center',
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    },
    logoHolder: {
        height: '25%',
        width: '50%',
    },
})