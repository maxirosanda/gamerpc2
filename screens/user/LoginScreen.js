import React, { useCallback, useReducer } from 'react';
import { Alert, StyleSheet,View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import AuthScreenWrapper from '../../components/AuthScreenWrapper';
import { COLORS } from '../../constants/colors';
import { signup } from '../../store/actions/auth.action';
import Input from '../../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '', 
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleLogin = () => {
    if (formState.formIsValid) {
      dispatch(login(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y usuario válido',
        [{ text: 'Ok' }]
      );
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <AuthScreenWrapper
      title="Hola! Bienvanido"
      message="¿No tienes Cuenta?"
      buttonText="Ingresar"
      buttonPath="Register"
    >
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="La contraseña debe ser mínimo 6 caracteres"
        required
        minLength={6}
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="INGRESAR"
        onPress={handleLogin}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:"#FB6D01",
    marginVertical: 20,
  },
  conteiner:{
    width:"100%",
    height:"100%", 
    backgroundColor:"#FB6D01"
    },
});

export default LoginScreen;