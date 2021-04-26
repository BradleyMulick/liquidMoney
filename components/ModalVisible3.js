import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Modal, handleChange, TouchableHighlight, Image, Pressable, TextInput } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import MatCom from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';

const ModalVisible3 = ({ modalVisible3, setModalVisible3 }) => {

    const navigation = useNavigation();

    const takeMeHome = () => {
        setModalVisible3(false)
        navigation.navigate('Home')
    }


    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}

        >
            <View style={styles.modalContainer}>
                <View style={styles.modalBorder}>
                    <View style={styles.logoHolder}>

                        <Image source={require('../assets/liquidLogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>

                    <Text style={styles.alertText1}>Congrats!</Text>
                    <Text style={styles.alertText}>You updated your max fluids</Text>
                    <Pressable
                        style={styles.alertButtContain}
                        onPress={() => takeMeHome()}
                    ><Text style={styles.alertTextButton}>OK</Text></Pressable>
                </View>
            </View>
        </Modal>

    )
}

export default ModalVisible3

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
    },

    modalView: {
        marginTop: "15%",
        backgroundColor: "white",
        marginBottom: '40%',
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: "auto",
    },
    modalText: {
        fontSize: 36,
    },
    confirm2: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: '3%',
        marginBottom: '5%'
    },

    confirmButt: {
        width: '98%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#4facfe',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7
    },

    confirm: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
    },

    confirmText: {
        fontSize: 48,
        color: 'white',
    },

    cancelText: {
        fontSize: 24
    },

    cancelButt: {
        width: '98%',
        height: '100%',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7
    },

    liquidSetter: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 40,
        width: 'auto',
        height: '100%',
        marginBottom: '20%',
        borderRadius: 8,
        color: '#4facfe',
        fontWeight: 'bold'
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

    },
    modalContainer: {
        backgroundColor: 'white',
        height: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    },
    alertText1: {
        fontSize: 48,
        alignItems: 'center',
        textAlign: 'center',
        color: '#eca400'
    },
    alertText: {
        fontSize: 28,
        alignItems: 'center',
        textAlign: 'center',
        color: 'black'
    },
    alertButtContain: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
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
    logoHolder: {
        height: '25%',
        width: '50%',
    },

})