import { StyleSheet, View, Text } from "react-native"
import { EvilIcons } from 'react-native-vector-icons';


export const Header = ({deleteAllTasks}) => {
    return (
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <EvilIcons name='trash' color='red' size={35} onPress={() => deleteAllTasks()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})