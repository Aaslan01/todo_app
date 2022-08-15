import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { deleteTask } from '../redus/taskSlice'
import { useDispatch } from 'react-redux'



const TodoList = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.tasks)
    const data = [
        { id: 1, title: "Learn the React Native" },
        { id: 2, title: "Learn the Redus toolKit" },
    ]
    const itemDelete = (id) => {
        dispatch(deleteTask({
            id: id,
        }))
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity TouchableOpacity={0.8} onPress={() => itemDelete(item.id)}><Text style={styles.delete}>Detele</Text></TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'pink',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'center',
    },
    title: {
        fontSize: 15,
    },
    delete: {
        fontSize: 15,
        color: "red"
    }
})