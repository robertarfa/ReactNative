/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function SkillCard({skill}) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#6d6d6d',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 5,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
