import * as React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function App() {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const animationVariable = React.useRef(new Animated.Value(0)).current;
  
  const runAnimation = (toVal) => {
    Animated.spring(animationVariable, {
        toValue : toVal,
        useNativeDriver: false,
    }).start();
  } 

  return (
    
      
         
    
    
    <Animated.View
      
      style={{
        padding: 20,
        backgroundColor: animationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['white', '#0D2534'],
                            extrapolate: 'clamp',
                          }),
        flex: 1,
        justifyContent: 'center',
      }}>
      
        
      <Card>
        <AssetExample />
      </Card>
      <Text style={{
        alignSelf: 'center',
        fontSize: 30,
        marginBottom: 50,
        color: 'black',
        fontWeight: '600',
      }}>LOGIN</Text>
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <Icon name="email" size={30} color={'#9BE6DE'} />
        <TextInput
          textContentType={'emailAddress'}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCompleteType={'email'}
          clearButtonMode={'while-editing'}
          keyboardType={'email-address'}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          placeholder={'Email Address'}
          style={{
            flex: 1,
            paddingLeft: 20,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth: 1,
          }}
        />
      </View>
      
      <View style={{
        flexDirection: 'row',
        marginBottom: 20,
      }}>
        <Icon name="key" size={30} color={'#9BE6DE'} />
        <TextInput
          textContentType={'password'}
          onChangeText={(text) => setPass(text)}
          value={pass}
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          placeholder={'Password'}
          secureTextEntry={true}
          style={{
            flex: 1,
            paddingLeft: 20,
            borderBottomColor: '#9BE6DE',
            borderBottomWidth: 1,
          }}
        />
      </View>
      <View style={{
        alignSelf: 'center',
        marginTop: 30,
      }}>
        
        <TouchableOpacity
         activeOpacity={0.8}
         underlayColor="#ffffff"
         onPress={() => runAnimation(1)}
        >
          <View style={{
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 8,
            elevation: 8,
            shadowColor: '#0047BB',
            shadowRadius: 8,
            backgroundColor: '#0D2534',
          }}>
            <Text style={{
              color: '#9BE6DE',
            }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
