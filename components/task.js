import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import { EvilIcons } from 'react-native-vector-icons';



const Task = ({text, completeTask, index}) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={setToggleCheckBox}
                />
                <Text style={toggleCheckBox ? styles.itemTextSelected : styles.itemText}> {text} </Text>
            </View>
            <EvilIcons name='close-o' color='red' size={25} onPress={() => completeTask()}/>             
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        paddingLeft: 10,
        maxWidth: '80%',
    },
    itemTextSelected: {
        paddingLeft: 10,
        maxWidth: '80%',
        textDecorationLine: 'line-through',
        color: 'grey'
    }
})

export default Task;