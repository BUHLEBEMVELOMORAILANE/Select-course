import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SixMonthCoursesScreen = ({ navigation }) => {
  const courses = [
    { id: 1, name: 'Swepping', fee: 'R1500' },
    { id: 2, name: 'Sewing', fee: 'R1500' },
    { id: 3, name: 'Landscaping', fee: 'R1500' },
    { id: 4, name: 'Security', fee: 'R1500' }, // Fixed the duplicate id
  ];

  const handleCoursePress = (courseId) => {
    navigation.navigate('CourseDetail', { courseId }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>One year-courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCoursePress(item.id)}>
            <View style={styles.courseItem}>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.courseFee}>{item.fee}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  courseName: {
    fontSize: 18,
  },
  courseFee: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SixMonthCoursesScreen;