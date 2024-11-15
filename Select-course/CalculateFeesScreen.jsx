import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const CalculateFeesScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseName, setCourseName] = useState(''); // New state for course name
  const [courseFee, setCourseFee] = useState(''); // New state for course fee
  const [courses, setCourses] = useState([]);
  const [totalFee, setTotalFee] = useState(0);

  const handleAddCourse = () => {
    if (courseName && courseFee) {
      const newCourse = { id: courses.length + 1, name: courseName, fee: parseFloat(courseFee) };
      setCourses([...courses, newCourse]);
      setCourseName(''); // Clear input
      setCourseFee(''); // Clear input
    }
  };

  const handleCalculateFees = () => {
    const total = courses.reduce((sum, course) => sum + course.fee, 0);
    setTotalFee(total);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Total Fee</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Course Name"
        value={courseName}
        onChangeText={(text) => setCourseName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Course Fee"
        value={courseFee}
        onChangeText={(text) => setCourseFee(text)}
        style={styles.input}
        keyboardType="numeric" 
      />
      <Button title="Add Course" onPress={handleAddCourse} />
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseFee}>R{item.fee.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Calculate Total Fee" onPress={handleCalculateFees} />
      <Text style={styles.totalFee}>Total Fee: R{totalFee.toFixed(2)}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  courseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  courseName: {
    fontSize: 18,
  },
  courseFee: {
    fontSize: 16,
    color: 'gray',
  },
  totalFee: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CalculateFeesScreen;