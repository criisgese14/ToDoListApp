import { KeyboardAvoidingView, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export const Input = ({handleAddTask, setTask, task}) => {
    return (
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Ionicons name='send' size={25} color='white'/>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create ({
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 0,
        paddingVertical: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E8EAED'
      }, 
    input: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: "75%",
    },
    addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: '#2ABAFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})