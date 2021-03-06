import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
  Easing
} from 'react-native'
import { Images } from '../../utils/Images'
import { theme } from '../../utils/theme'
const { width, height } = Dimensions.get('screen')
import { useIsFocused, useNavigation } from '@react-navigation/native'

export const Header = ({
  onBackPress = null,
  back = null,
  title = '',
  menu = null,
  serach = null,
  headerTest = '',
  notification = null,
  arrow = null,
  dots = null
}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {back && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
            <Image style={styles.arrow} source={Images.Pictures.arrow} />
          </TouchableOpacity>
        )}
        {menu && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
            <Image style={styles.arrow} source={Images.Pictures.home} />
          </TouchableOpacity>
        )}
        {arrow && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
            <Image style={styles.arrow} source={Images.Pictures.arrowLeft} />
          </TouchableOpacity>
        )}
        <Text style={[headerTest, styles.headerTest]}>{title}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {serach && (
          <TouchableOpacity>
            <Image
              style={[styles.ser, { marginRight: 15 }]}
              source={Images.Pictures.search}
            />
          </TouchableOpacity>
        )}
        {notification && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('CustomerNotification')}>
            <Image style={styles.ser} source={Images.Pictures.notification} />
          </TouchableOpacity>
        )}
        {dots && (
          <TouchableOpacity>
            <Image style={styles.arrow} source={Images.Pictures.dots} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS ==  'ios' ? 45 :20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(135, 135, 135, 0.1)'
  },
  ser: {
    width: 26,
    height: 26,
    resizeMode: 'contain'
  },
  headerTest: {
    color: '#313842',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: '10%'
  }
})
