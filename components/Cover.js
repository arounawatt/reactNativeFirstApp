import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Cover = (props) => {

  const { image } = props;
  const { container, imageStyle } = styles;

  return (
    <View style={container}>
      <Image style={imageStyle} source={image} />
    </View>
  )
}

export default Cover

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 245,
    borderWidth: 1,
    marginBottom: 30
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  }
})