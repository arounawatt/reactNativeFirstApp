import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Title from '../components/Title';
import Rating from '../components/Rating';
import ButtonAction from '../components/ButtonAction';

const BookScreen = () => {

  const book1 = require("../assets/images/book1.png");

  return (
	<View style={styles.container}>
		<Header />
		<Cover image={book1} />
    <Title title='the jungle book' />
    <Title title='John Doe' customStyle={[styles.subTitle]}/>
    <Rating />
    <ButtonAction />
	</View>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#000',
		alignItems: "center",
		paddingBottom: 20,
		marginTop: Constants.statusBarHeight,
		width: "100%"
	},
  subTitle: {
    opacity: 0.7,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 30,
  }
});

export default BookScreen;