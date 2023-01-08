import { useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import Task from './components/task';
import { Input } from './components/input';
import { Header } from './components/header';

export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const deleteAllTasks = () => {
    setTaskItems([]);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
        
        <Header 
        deleteAllTasks={deleteAllTasks}
        />
        
        <View style={styles.items}>
          {
            taskItems?.map((item, index) => {
              return (
                <View key={index}>
                  <Task text={item} completeTask={completeTask} index={index}/>
                </View>
              ) 
            })  
          }
        </View>
      </View>

      <Input 
      handleAddTask = {handleAddTask}
      task = {task}
      setTask = {setTask} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
});
