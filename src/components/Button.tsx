import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps {
  isFilled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ isFilled }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        isFilled && {backgroundColor: colors.green}]} 
      activeOpacity={0.7}
    >
      <Text style={styles.text}>
        Confirmar
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_light ,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  }
});
