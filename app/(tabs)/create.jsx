import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StyleSheet, Image, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Create = () => {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
    <ThemedView className="bg-white space-y-3">
      <ThemedText  type="title">Create</ThemedText>
      <ThemedText type="title">Create</ThemedText>
      <ThemedText type="title">Create</ThemedText>
    </ThemedView>
    </ParallaxScrollView>

  )
}


export default Create

const styles = StyleSheet.create({
    headerImage: {
      color: '#ffff',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });