import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { OsPrefix } from '../utils/constants';

const Rating = (props) => {

  const { container, star, votes, rate } = styles;

  return (
    <View style={container}>
      <Ionicons style={star} name={`${OsPrefix}-star`} />
      <Text style={rate}>4.8</Text>
      <Text style={votes}>(2568)</Text>
    </View>
  )
}

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 140,
  },
  star: {
    color: '#ffdd4f'
  },
  rate: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'montserra-medium',
    lineHeight: 16,
    opacity: 0.5
  },
  votes: {
    color: "#fff",
    opacity: 0.5,
    fontFamily: "montserra-black",
    fontSize: 14
  },

})