import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment =() =>{setCount(prev => prev + 1);
  };
  
  const decrement = () => {setCount(prev => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, 
    width: 150, 
  },
});