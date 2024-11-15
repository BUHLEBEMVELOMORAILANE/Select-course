import React from 'react';
import { View, Text, Image } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Contact Us</Text>
      <Text style={{ fontSize: 18, color: 'gray' }}>Phone Number: 011 123 4567</Text>
      <Text style={{ fontSize: 18, color: 'gray' }}>Email Address: [info@SelectCourses.co.za](mailto:info@SelectCourses.co.za)</Text>
      <Text style={{ fontSize: 18, color: 'Red' }}>Physical Address: 198 Hume St, Fourways, Johannesburg</Text>
    </View>
  );
};

export default ContactScreen;