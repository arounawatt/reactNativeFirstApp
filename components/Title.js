import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title, customStyle = []}) => {

  const {container, bookTitle} = styles;
  return (
    <View style={container} >
      <Text style={[bookTitle, ...customStyle]} >{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  bookTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "400",
    lineHeight: 30,
    fontFamily: 'sectra'
  }
})