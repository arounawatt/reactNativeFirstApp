import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { OsPrefix } from '../utils/constants';

const Header = (props) => {

	const { container, closeIcon, cartIcon } = styles;
  return (
    <View style={container}>
      <Ionicons name={`${OsPrefix}-close`} size={50} style={closeIcon} />
      <Ionicons name={`${OsPrefix}-cart`} size={50} style={cartIcon} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 20,
      marginVertical: 20
		},
		closeIcon: {
      fontSize: 45,
      color: "#fff"
		},
		cartIcon: {
      fontSize: 30,
      color: "#fff"
		}
})