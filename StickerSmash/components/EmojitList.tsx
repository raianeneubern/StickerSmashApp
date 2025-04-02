import { StyleSheet, FlatList, Platform, Pressable} from 'react-native'
import { useState } from 'react'
import { Image, type ImageSource } from 'expo-image'

type Props = {
    onSelect: (image: ImageSource ) => void;
    onCloseModal: () => void;
}

export default function EmojitList() {
  return (
    <View>
      <Text>EmojitList</Text>
    </View>
  )
}

const styles = StyleSheet.create({})