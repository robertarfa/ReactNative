/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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

interface SkillData{
  id: string;
  name: string;
}

export function Home() {
  const [greeting, setGreeting] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
const [requiredField, setRequiredField] = useState(false)

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    
    if (newSkill !== ''){
      console.log('data', data)
      setMySkills(oldState => [...oldState, data]);
      setNewSkill('');
    } else {
      setRequiredField(true);

      setTimeout(() => {
        setRequiredField(false);
      }, 3000);
    }
  }

  function handleRemoveSkill(id: string){
    console.log('logs id', id);
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Roberta</Text>
      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        value={newSkill}
        placeholder={'New Skill'}
        placeholderTextColor={'#999'}
        onChangeText={setNewSkill}
      />

      <Text style={styles.required}>
        {requiredField && 'Campo Obrigatorio'}
        </Text>

      <Button  title={'Add'} onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) =>
         <SkillCard 
         skill={item.name} 
         onPress={() => handleRemoveSkill(item.id)}
         />
        }
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
  greetings: {
    color: '#fff',
  },
  required:{
    color: 'red'
  }
});
