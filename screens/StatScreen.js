
import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import LogForm from '../components/LogForm';
import LogsList from '../components/LogsList';
import { LogsContext } from '../navigation/LogsProvider';


const StatScreen = () => {

    const [allLogs, setAllLogs] = useContext(LogsContext)

    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollArea}>
                <View style={styles.container}>
                    <LogsList allLogs={allLogs} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default StatScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    scrollArea: {
        height: "90%",

    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
})