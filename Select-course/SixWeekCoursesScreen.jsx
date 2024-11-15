import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SixWeekCoursesScreen = ({ navigation }) => {
  const courses = [
    { id: 5, name: 'Child development', fee: 'R950' }, 
    { id: 6, name: 'Chef', fee: 'R850' },
    { id: 7, name: 'Garden Maintenance', fee: 'R150' },
  ];

  const handleCoursePress = (courseId) => {
    navigation.navigate('CourseDetail', { courseId }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two-year Courses</Text>
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
    borderBottomColor: '#6A6846',
  },
  courseName: {
    fontSize: 18,
  },
  courseFee: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SixWeekCoursesScreen;