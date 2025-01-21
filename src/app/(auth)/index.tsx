import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Intro = () => {
  const [data, setData] = useState([1, 2, 3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const textData = [
    'Improve your safety',
    'Enhance your security',
    'Boost your confidence',
  ]; // Corresponding text for each item

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleGetStarted = () => {
    navigation.navigate('register'); // Navigate to the 'register' screen
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex(Math.round(x / width));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width,
                  height: height / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                  }}
                />
              </View>
            );
          }}
        />
        {/* Scroll Indicator */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: currentIndex === index ? '#2D3748' : 'gray',
                marginLeft: 5,
              }}
            />
          ))}
        </View>
        {/* Dynamic Text */}
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {textData[currentIndex]}
        </Text>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { marginRight: 160 }]}
            onPress={handlePrevious}
            disabled={currentIndex === 0} // Disable when at the first item
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>

          {/* Conditional rendering for Get Started button */}
          {currentIndex === data.length - 1 ? (
            <TouchableOpacity
              style={[styles.button, { marginLeft: 10 }]}
              onPress={handleGetStarted}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, { marginLeft: 10 }]}
              onPress={handleNext}
              disabled={currentIndex === data.length - 1} // Disable when at the last item
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 250,
  },
  button: {
    backgroundColor: '#2D3748',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Intro;


