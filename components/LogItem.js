import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, useState } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatCom from "react-native-vector-icons/MaterialCommunityIcons"

const Task = ({ todo, handleDeleteTodo, id, convertOn }) => {

    const [measure, setMeasure] = React.useState(true)


    return (

        <View style={styles.taskWrapper}>
            <Text style={styles.task}>{todo.date}</Text>
            <Text style={styles.task}>{todo.fluidName}</Text>
            <MatCom name={todo.liquidType} size={30} color="#4facfe" />


            {
                convertOn === false ?
                    <Text style={styles.task}>{todo.task}mL</Text>
                    :
                    <Text style={styles.task}>{(todo.task / 29.574).toFixed(0)}oz</Text>
            }

            <TouchableOpacity
                onPress={handleDeleteTodo(id)}
            >
                <Icon name='trash-o' size={25} color="#4facfe" />
            </TouchableOpacity>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',

        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
    },
    task: {
        paddingBottom: 10,
        paddingLeft: 10,
        alignItems: 'center',
        width: 'auto',

        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    }

})