import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailScreen = ({ route }) => {
  const { courseId } = route.params;

  const courses = {
    1: {
      name: 'First Aid',
      fee: 'R1500',
      description: 'To provide first aid awareness and basic life support',
      content: [
        'Wounds and bleeding',
        'Burns and fractures',
        'Emergency scene management',
        'Cardio-Pulmonary Resuscitation (CPR)',
        'Respiratory distress e.g., Choking, blocked airway',
      ],
    },
    2: {
      name: 'Sewing',
      fee: 'R1500',
      description: 'To provide alterations and new garment tailoring services',
      content: [
        'Types of stitches',
        'Threading a sewing machine',
        'Sewing buttons, zips, hems and seams',
        'Alterations',
        'Designing and sewing new garments',
      ],
    },
    3: {
      name: 'Landscaping',
      fee: 'R1500',
      description: 'To provide landscaping services for new and established gardens',
      content: [
        'Indigenous and exotic plants and trees',
        'Fixed structures (fountains, statues, benches, tables, built-in braai)',
        'Balancing of plants and trees in a garden',
        'Aesthetics of plant shapes and colours',
        'Garden layout',
      ],
    },
    4: {
      name: 'Life Skills',
      fee: 'R1500',
      description: 'To provide skills to navigate basic life necessities',
      content: [
        'Opening a bank account',
        'Basic labour law (know your rights)',
        'Basic reading and writing literacy',
        'Basic numeric literacy',
      ],
    },
    // Six-week courses
    5: {
      name: 'Child Minding',
      fee: 'R750',
      description: 'To provide basic child and baby care',
      content: [
        'birth to six-month old baby needs',
        'seven-month to one year old needs',
        'Toddler needs',
        'Educational toys',
      ],
    },
    6: {
      name: 'Cooking',
      fee: 'R750',
      description: 'To prepare and cook nutritious family meals',
      content: [
        'Nutritional requirements for a healthy body',
        'Types of protein, carbohydrates and vegetables',
        'Planning meals',
        'Preparation and cooking of meals',
      ],
    },
    7: {
      name: 'Garden Maintenance',
      fee: 'R750',
      description: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
      content: [
        'Water restrictions and the watering requirements of indigenous and exotic plants',
        'Pruning and propagation of plants',
        'Planting techniques for different plant types',
      ],
    },
  };

  const course = courses[courseId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.fee}>Fees: {course.fee}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.contentTitle}>Content:</Text>
      {course.content.map((item, index) => (
        <Text key={index} style={styles.contentItem}>• {item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fee: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contentItem: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 2,
  },
});

export default CourseDetailScreen;