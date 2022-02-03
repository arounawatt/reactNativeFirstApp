import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const ButtonAction = (props) => {

  const { container, price, priceContent, preview, previewContent } = styles;
  return (
    <View style={container}>
      <TouchableOpacity style={price} >
        <Text style={priceContent}>19.99€</Text>
      </TouchableOpacity>
      <TouchableOpacity style={preview} >
        <Text style={previewContent}>Free preview</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 48,
    backgroundColor: "#fff"
  },
  priceContent: {

  },
  preview: {

  },
  previewContent: {

  }

})

export default ButtonAction
