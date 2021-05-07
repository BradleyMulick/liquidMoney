import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Modal, useState, handleChange, TouchableHighlight, Pressable, TextInput } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import MatCom from "react-native-vector-icons/MaterialCommunityIcons"


const Modal1 = ({ modal1, setModal1, convertOn, fluidName, liquidType, fluidLevel, setFluidLevel, handleAddTodo, allLogs, cancelLiq, increase, decrease }) => {

    const [onner, setOnner] = React.useState(true)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal1}
        >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{fluidName}</Text>
                <View style={styles.liquidAdd}>
                    <TouchableHighlight onPress={() => setFluidLevel(237)} underlayColor="white">
                        <View style={styles.row} >
                            <MatCom name='coffee' size={30} color="#4facfe" />
                            <Text >Small</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setFluidLevel(355)} underlayColor="white">
                        <View style={styles.row} >
                            <MatCom name='coffee' size={45} color="#4facfe" />
                            <Text>Tall</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setFluidLevel(473)} underlayColor="white">
                        <View style={styles.row} >
                            <MatCom name='coffee' size={60} color="#4facfe" />
                            <Text>Grande</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setFluidLevel(591)} underlayColor="white">
                        <View style={styles.row} >
                            <MatCom name='coffee' size={70} color="#4facfe" />
                            <Text>Vente</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.confirm2}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={increase}
                    >
                        <Font5 name="angle-double-up" size={40} />
                    </Pressable>
                    {/* <TextInput
                        keyboardType='numeric'
                        style={styles.liquidSetter}
                        placeholder="0"
                        onChangeText={handleChange}
                        onSubmitEditing={() => handleAddTodo(allLogs)}
                    >{fluidLevel}</TextInput> */}

                    {
                        convertOn === false ?
                            <TextInput
                                keyboardType='numeric'
                                style={styles.liquidSetter}
                                placeholder="0"
                                onChangeText={handleChange}
                                onSubmitEditing={() => handleAddTodo(allLogs)}
                            >{fluidLevel}</TextInput>
                            :
                            <TextInput
                                keyboardType='numeric'
                                style={styles.liquidSetter}
                                placeholder="0"
                                onChangeText={handleChange}
                                onSubmitEditing={() => handleAddTodo(allLogs)}
                            >{(fluidLevel / 29.574).toFixed(0)}</TextInput>
                    }
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={decrease}
                    >
                        <Font5 name="angle-double-down" size={40} />
                    </Pressable>
                </View>
                <View style={styles.confirm}>
                    <Pressable
                        style={styles.confirmButt}
                        onPress={() => handleAddTodo(allLogs)}
                    >
                        <Text style={styles.confirmText}>Submit</Text>
                    </Pressable>
                </View>
                <View style={styles.confirm}>
                    <Pressable
                        style={[styles.cancelButt, styles.buttonClose]}
                        onPress={() => cancelLiq()}
                    >
                        <Text style={styles.cancelText}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default Modal1

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
        height: "80%",
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


    }
})