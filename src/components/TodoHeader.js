import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redus/taskSlice'


const TodoHeader = () => {
    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            Alert.alert("Enter the Todo Task");
            setTodo("");
            return;
        }
        dispatch(
            addTask({
                task: todo,
            })
        );
        setTodo("");
    };

    const [todo, setTodo] = useState("");

    return (
        <View>
            <Text style={styles.header}>
                Todo List
            </Text>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <TextInput placeholder="Add Todo" onChangeText={setTodo} style={styles.textInput} />
                <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
                    <Text style={{ color: "white" }}>Add</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default TodoHeader

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
        //backgroundColor: "red",
    },
    textInput: {
        borderRadius: 5,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: "90%",
    },
    button: {
        backgroundColor: "black",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: "90%",
        alignItems: "center",
    }
})