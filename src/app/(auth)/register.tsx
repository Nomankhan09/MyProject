import { View, Text, ImageBackground, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState  } from 'react'
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal'
import Icon from 'react-native-vector-icons/MaterialIcons';
import imagePaths from '@/src/constant/imagePaths';
import { useNavigation } from '@react-navigation/native';


const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleregister = () => {

    if (!username.trim()) {
      Alert.alert('Invalid Input', 'Please enter a valid username')
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Invalid Input', 'Please enter a valid username')
      return;
    }

    if (phoneNumber.length < 10) {
      Alert.alert('Invalid phone number', 'Please enter a valid phone number');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Registration Successfull', `Username: ${username}\nEmail: ${email}\nPhone: +${callingCode}${phoneNumber}`);
    }, 1000);
    navigation.navigate('login')
  };
  return (
    <ImageBackground source={imagePaths.bg_image} style={styles.loginbg}>
      <View >
        <Text style={styles.text}>REGISTER</Text>
        <Text style={styles.subheading}>Hello user please Register your account</Text>
        {/* Username Input */}
        <View style={styles.inputRow}>
          <Icon name="person" size={24} color="#000" />
          <Text style={styles.divider}>|</Text>
          <TextInput
            style={styles.input}
            placeholder=" Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputRow}>
          <Icon name="email" size={24} color="#000" />
          <Text style={styles.divider}>|</Text>
          <TextInput
            style={styles.input}
            placeholder=" Email Address"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.inputRow}>
          <View style={styles.iconContainer}>
            <Icon name="phone" size={24} color="#000" />
            {/*<Text style={styles.callingCode}>+{callingCode}</Text>*/}
          </View>
          <Text style={styles.divider}>|</Text>
          <TextInput
            style={styles.input}
            placeholder=" Mobile Number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleregister}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Login..' : 'Register'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  loginbg: {
    flex: 1,
    resizeMode: 'cover',
  },
  
  
  
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
    marginTop: 70,
    fontFamily: 'serif',
  },
  
  subheading: {
    fontSize: 10,
    fontWeight: 'normal',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 0,
    fontFamily: 'serif',
    
  },
  
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    alignSelf: 'center',
  },
  
  countryPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  callingCode: {
    fontSize: 18,
    marginLeft: 5,
  },
  
  divider: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#ccc',
  },
  
  input: {
    flex: 1, // Let the input take the remaining width
    height: 50,
    fontSize: 18,
    marginLeft: 10,
  },
  
  otpheading: {
    fontSize: 12,
    fontWeight: 'normal',
    marginBottom: 10,
    textAlign: 'left',
    paddingLeft: 20,
    fontFamily: 'serif',
    
  },
  
  button: {
    backgroundColor: '#2D3748',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})



export default Register