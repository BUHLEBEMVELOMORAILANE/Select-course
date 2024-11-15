import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/Logo.png')} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Select Courses</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
        <Text style={styles.link}>one year-Month Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
        <Text style={styles.link}>Two year Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CalculateFees')}>
        <Text style={styles.link}>Calculate Fees</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.link}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 18,
    color: 'Red',
    marginVertical: 10, // Add some vertical spacing between links
  },
});

export default HomeScreen;