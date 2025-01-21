import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyButton from '@/src/components/MyButton';
import imagePaths from '@/src/constant/imagePaths';

const Otp = () => {
  const navigation = useNavigation<any>();
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(60); // Timer state (initially 60 seconds)

  // Function to handle input change
  const handleInputChange = (text: string, index: number) => {
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus(); // Focus on the next input
    } else if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Focus on the previous input if backspace is pressed
    }
  };

  // Start the timer when the component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Clear the timer when time reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format the time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
  }

  return (
    <ImageBackground source={imagePaths.bg_image} style={styles.loginbg}>
      <View>
        <Text style={styles.text}>OTP VERIFICATION</Text>
        <Text style={styles.subheading}>Please enter OTP sent to your mobile number</Text>
      </View>

      <View style={styles.otpContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
            ref={(ref) => (inputRefs.current[index] = ref)} // Save the reference
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      </View>

      <MyButton title={"Verify"} onPress={() => { navigation.replace('./(main)/index') }} />
    </ImageBackground>
  );
};

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
    fontFamily: 'serif',
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  timerContainer: {
    marginTop: 50,
    alignItems: 'center',

    width: "20%",
    alignSelf: 'center',
    borderRadius: 10,

    backgroundColor: '#e6f3f5',
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#',
  },

});

export default Otp;
