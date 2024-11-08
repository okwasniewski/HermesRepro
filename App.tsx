import React from 'react';
import {
    Button,
  View,
} from 'react-native';

const doSomethingOnArray = (array: Float32Array) => {
  array.buffer.slice(0, 1);
};

const createArrays = () => {
  for (let i = 0; i < 50; i++) {
    const arrayBuffer = new Float32Array(1000);
    doSomethingOnArray(arrayBuffer);
  }
};

function App(): React.JSX.Element {
  return (<View style={{marginTop: 50}}>
    <Button title="Click me" onPress={createArrays} />
  </View>);
}

export default App;
