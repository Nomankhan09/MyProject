import { View, Text, ImageBackground, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal'
import imagePaths from '@/src/constant/imagePaths'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation<any>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (phoneNumber.length < 10) {
      Alert.alert('Invalid phone number', 'Please enter a valid phone number');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Phone Number Submitted', `Phone number: +${callingCode}${phoneNumber}`);
      navigation.navigate('otp')
    }, 2000);

  };
  return (
    <ImageBackground source={imagePaths.bg_image} style={styles.loginbg}>
      <View >
        <Text style={styles.text}>LOGIN</Text>
        <Text style={styles.subheading}>Hello user please login your account</Text>
        <View style={styles.inputRow}>
          <View style={styles.countryPickerContainer}>
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              withModal
              countryCode={countryCode}
              onSelect={(country) => {
                setCountryCode(country.cca2);
                setCallingCode(country.callingCode[0]);
              }}
            />
            <Text style={styles.callingCode}>+{callingCode}</Text>
          </View>
          <Text style={styles.divider}>|</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Text style={styles.otpheading}>*We will sent OTP for verification</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Login..' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Login

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
    height: 50,
    width: '90%',
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
    flex: 1, 
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
})


