import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBar} placeholder="Your goals!" />
        <Button title="Add Goal" />
      </View>
      <View><Text>List of goals</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBar: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 4,
    width: '80%',
    marginRight: 8,
  }
});
