import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import colors from '../../theme/colors';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// LoginScreen with form validation using "useForm" hook.
// reusable CustomInput and 2 CustomButtons
// When Login button is clicked, it redirects to BottomScreen
// which is a HomeScreen

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    control,
    handleSubmit,
    // formState: {errors},
  } = useForm();

  const onSubmit = (data: {}) => {
    console.log('submit', data);
    navigation.navigate('Bottom');
  };
  return (
    <View style={styles.page}>
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: '*Username is required',
          minLength: {
            value: 5,
            message: 'Username should be more than 3 characters',
          },
        }}
        label="Username"
      />
      <CustomInput
        name="password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: '*Password is required',
          minLength: {
            value: 5,
            message: 'Password should be more than 5 characters',
          },
        }}
        label="Password"
      />
      <CustomButton onPress={handleSubmit(onSubmit)} />
      <CustomButton
        onPress={handleSubmit(onSubmit)}
        style={styles.signupButton}
        title="Sign Up"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
  },
  signupButton: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.lightgrey,
    width: 343,
    height: 48,
  },
});
export default LoginScreen;
