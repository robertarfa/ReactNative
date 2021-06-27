/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import SkillCard from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([
    'JavaScript',
    'ReactJS',
    'ReactNative',
    'Kotlin',
    'SQL',
  ]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Roberta</Text>

      <TextInput
        style={styles.input}
        value={newSkill}
        placeholder={'New Skill'}
        placeholderTextColor={'#999'}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#6d6d6d',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 15,
    marginTop: 30,
    borderRadius: 7,
  },
});
