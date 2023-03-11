import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller, Control} from 'react-hook-form';
import colors from '../../theme/colors';

interface ICustomInput {
  control: Control;
  label: string;
  name: string;
  rules?: object;
}

// CustomInput component - rendered in LoginScreen


const CustomInput = ({control, label, name, rules = {}}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            {/* <Text style={styles.label}>{label}</Text> */}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              autoCapitalize="none"
              secureTextEntry={name === 'password' ? true : false}
              style={[
                styles.input,
                {borderColor: error ? colors.accent : colors.border},
              ]}
            />
            {error && (
              <Text style={{color: colors.accent}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
    marginVertical: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    height: 50,
    borderRadius: 5,
  },
});

export default CustomInput;
