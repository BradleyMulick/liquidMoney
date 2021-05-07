import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image, KeyboardAvoidingView, Switch, Keyboard, Modal, Pressable } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import { FluidContext } from '../navigation/FluidProvider'
import FormButton from '../components/FormButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import ModalVisible3 from '../components/ModalVisible3';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const windowHeight = Dimensions.get('window').height;

const STORAGE_KEY = '@save_age'

const FluidMax = ({ isOn, setIsOn, convertOn, setConvertOn, navigation }) => {

    // const navigation = useNavigation();

    const [maxFluids, setMaxFluids] = useContext(FluidContext)
    const [reminderTime, setReminderTime] = useState(0)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [currentBox, setCurrentBox] = useState(false)
    const [showOne, setShowOne] = useState(false)
    const [showOThree, setShowThree] = useState(false)
    const [showFour, setShowFour] = useState(false)
    const [showZero, setShowZero] = useState(false)
    // const [maxFluids, setMaxFluids] = useState('')
    const [modalAlerty, setModalAlerty] = useState(false)
    const [modalVisible3, setModalVisible3] = useState(false)

    const [measure, setMeasure] = useState(true)

    const [text, setText] = useState('')
    const onChange = text => setText(text)




    const saveData = async () => {
        try {
            if (text > 0) {

                if (measure === false) {
                    setMaxFluids(text)

                    await AsyncStorage.removeItem(STORAGE_KEY);
                    await AsyncStorage.setItem(STORAGE_KEY, text)
                    // navigation.navigate('Home')
                    setModalVisible3(!modalVisible3)
                    console.log("SET THE MODAL OPENNNNNN")
                    setText(0)
                } else if (measure === true) {
                    setMaxFluids((text * 29.574).toFixed(0))

                    await AsyncStorage.removeItem(STORAGE_KEY);
                    await AsyncStorage.setItem(STORAGE_KEY, (text * 29.574).toFixed(0))
                    // navigation.navigate('Home')
                    setModalVisible3(!modalVisible3)
                    console.log("SET THE MODAL OPENNNNNN")
                    setText(0)
                }

            } else {
                setModalAlerty(true)
            }

        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }



    // const readData = async () => {
    //     try {
    //         const fluids = await AsyncStorage.getItem(STORAGE_KEY)

    //         if (fluids !== null) {

    //             setMaxFluids(fluids)
    //         }
    //     } catch (e) {
    //         alert('Failed to fetch the data from storage')
    //     }
    // }
    // useEffect(() => {
    //     saveData()
    // }, [text])

    const clearStorage = async () => {
        try {
            // await AsyncStorage.clear()
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys);
            setMaxFluids(0)
            alert('Fluid MAX cleared!')

        } catch (e) {
            alert('Failed to clear the async storage.')
        }
    }


    const toggleSwitch = () => {
        setIsOn(previousState => !previousState);

    }
    const toggleSwitch2 = () => {
        setConvertOn(previousState => !previousState);

    }


    const onChangeTemp = temp => setText(temp)
    const onChangeText = fluids => setMaxFluids(fluids)


    useEffect(() => {
        setText('')
    }, [])

    return (


        <View style={styles.container} style={{ height: windowHeight }}>

            {/* MODAL FOR ALERT >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            {modalVisible3 === true ?
                <ModalVisible3 modalVisible3={modalVisible3} setModalVisible3={setModalVisible3} />
                : null}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAlerty}

            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalBorder}>
                        <View style={styles.logoHolder}>

                            <Image source={require('../assets/liquidLogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>


                        {/* <Text style={styles.alertText1}>Congrats!</Text> */}
                        <Text style={styles.alertText}>SET YOUR MAX FLUIDS</Text>
                        <Pressable
                            style={styles.alertButtContain}
                            onPress={() => setModalAlerty(false)}
                        ><Text style={styles.alertTextButton}>OK</Text></Pressable>
                    </View>
                </View>
            </Modal>



            <View style={styles.header}>
                <Text style={styles.title}>SETTINGS</Text>
            </View>
            <View style={styles.restrictContain}>

                <Text style={styles.title2}>Fluid Restriction</Text>


                {/* <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder={maxFluids}
                        placeholderTextColor="#727272"
                        onChangeText={onChange}
                        onSubmitEditing={Keyboard.dismiss}
                        value={text}
                    ></TextInput> */}


                {
                    convertOn === false ?
                        <View style={styles.fluflu}>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder={maxFluids}
                                placeholderTextColor="#727272"
                                onChangeText={onChange}
                                onSubmitEditing={Keyboard.dismiss}
                                value={text}
                            ></TextInput>
                            <Text style={styles.millers}>mL*</Text>
                        </View>
                        :
                        <View style={styles.fluflu}>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                placeholder={(maxFluids / 29.574).toFixed(0)}
                                placeholderTextColor="#727272"
                                onChangeText={onChange}
                                onSubmitEditing={Keyboard.dismiss}
                                value={text}
                            ></TextInput>
                            <Text style={styles.millers}>oz*</Text>
                        </View>

                }

                {
                    convertOn === false ?
                        <Text >Current Fluid Max {maxFluids}mL*</Text>
                        :
                        <Text >Current Fluid Max {(maxFluids / 29.574).toFixed(0)}oz*</Text>
                }
                <Text style={styles.fluidDocWarning}>* Determine this number with your physician.</Text>
            </View>

            <View style={styles.radio}>
                <Text style={styles.bigWarning}>Reminder Schedule</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isOn ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isOn}
                    style={styles.switcher}

                />
                <Text style={styles.onOff}>OFF/ON</Text>
                <Text style={styles.bigWarning}>measurement</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={convertOn ? "#192053" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={convertOn}
                    style={styles.switcher}

                />
                <Text style={styles.onOff}>ml/Oz</Text>
            </View>
            <View style={styles.warning}>
                <Text style={styles.bigWarning}>WARNING</Text>
                <Text style={styles.warningInfo} >
                    The information on this application ("LIQUID MONEY") is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment.  All content including is for general information purposes only.  LIQUID MONEY makes no representation and assumes no responsibility for the accuracy of information contained on or available through LIQUID MONEY and such information is subject to change without notice. LIQUID MONEY IS NOT RESPONSIBLE NOR LIABLE FOR ANY ADVICE, COURSE OF TREATMENT, DIAGNOSIS OR ANY OTHER INFORMATION, SERVICES OR PRODUCTS THAT YOU OBTAIN THROUGH THIS APPLICATION.
                         </Text>
                <TouchableOpacity onPress={saveData} style={styles.button}>
                    <Text style={styles.buttonText}>Save and Agree</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default FluidMax


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'arlrdbd'
    },
    text: {
        fontSize: 20,
        color: '#333333',
        fontFamily: 'arlrdbd'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 44,
        width: '100%',
        color: '#4facfe',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',


    },
    title2: {
        fontSize: 30,
        width: '100%',
        color: 'black',
        textAlign: 'center'

    },
    millers: {
        width: '25%',
        fontSize: 24
    },
    fluflu: {
        flexDirection: "row",
    },
    panel: {
        height: 50,
        backgroundColor: 'yellow',
        alignItems: 'center',
    },
    input: {
        width: "75%",
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        fontSize: 36,
        textAlign: 'right',
        padding: 10,
        marginLeft: 10,
        color: 'black'
    },
    fluidDocWarning: {
        fontSize: 16,
        fontFamily: 'arlrdbd'
    },
    warning: {
        flex: 3,
        padding: 10,

        justifyContent: 'flex-end',

        marginBottom: '20%',


    },

    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#4facfe',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,


    },
    buttonText: {

    },
    bigWarning: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4facfe',
        textAlign: 'left',
        paddingBottom: 10,
        fontFamily: ''


    },
    warningInfo: {
        alignItems: 'center',
        fontFamily: 'arlrdbd',
        fontSize: 14

    },
    radio: {
        flex: 2,
        padding: 10,

        marginTop: 10


    },
    radioContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    restrictContain: {
        padding: 5
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
    switcher: {
        transform: [{ scaleX: 2 }, { scaleY: 2 }],
        alignSelf: 'flex-start',

    },
    logoHolder: {
        height: '25%',
        width: '50%',
    },
})
