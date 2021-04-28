import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Modal, Pressable, Image } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalNoMoney = ({ modalNoMoney, setModalNoMoney }) => {

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalNoMoney}

        >
            <View style={styles.modalView2}>
                <View style={styles.container}>

                    <View style={styles.logoHolder}>

                        <Image source={require('../assets/liquidLogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>

                    <Text style={styles.congratMoney}>
                        AH MAN!
                    </Text>
                    <View style={styles.congratTextHold}>
                        <Text style={styles.congratText}>No more money available to win today!</Text>
                        <Text style={styles.congratWarning}>Your credits will expire in a year</Text>
                    </View>
                </View>

                <Pressable
                    style={styles.congratButton}
                    onPress={() => setModalNoMoney(!modalNoMoney)}
                >
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>OK</Text>
                </Pressable>
            </View>

        </Modal>

    )
}

export default ModalNoMoney

const styles = StyleSheet.create({

    container: {
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    congratMoney: {
        fontSize: 36,
        paddingVertical: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'

    },
    congratText: {
        fontSize: 44,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    congratWarning: {
        fontSize: 16,
        textAlign: 'center',

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
    congratTextHold: {
        width: "100%"
    },


    modalView2: {
        display: 'flex',
        backgroundColor: "white",
        alignItems: "center",
        width: '100%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logoHolder: {
        height: '25%',
        width: '50%',
    },

})