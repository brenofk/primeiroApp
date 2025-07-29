import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';



//function App() {
//  return (
//    <View>
//      <Text> 
//        Disciplina de Dispositivos Móveis
//      </Text>
//    </View>
//  );
//}

class App extends Component {
  render() {
    let nome = 'IFPR'
    return (
      <View> 
        <Text>
          Hello World!
        </Text>
        <Text style=
        {{
          color: 'red',
          fontSize: 50,
          margin: 15
        }}
        > 
        Desenvolvedor  
        </Text>

        <Text 
        style={{
          fontSize: 30,
        }}
        > 
        {nome}        
        </Text>
        <Image
        source={{uri: 'https://www.pudim.com.br/pudim.jpg'}}
        style={{width: 300, height: 300}}
        >

        </Image>
      </View>
      );
  }
}

export default App;