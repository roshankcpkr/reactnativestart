import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText)
  {
    setEnteredText(enteredText);
  }
  function addGoalHandler()
  {
    setCourseGoals((currentCourseGoals)=>{
      return [...currentCourseGoals, enteredText];
    })
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.inputBar} placeholder="Your goals!" />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>{courseGoals.map(el=>{
        return<View key={el} style={styles.goalItem}>
          <Text style={styles.goalText} key={el}>{el}</Text>
          </View>
        
      })}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  inputBar: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 4,
    width: '70%',
    marginRight: 8,

  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
  }
});
