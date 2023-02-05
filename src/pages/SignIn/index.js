import React from 'react';
import { 
  Container, 
  ContainerHeader, 
  Message, 
  ContainerForm, 
  Title,
  Input, 
  Button, 
  BtnText,
  ButtonRegister,
  BtnTextRegister 
} from './styles'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
  const navigation = useNavigation()
 return (
   <Container>

    <ContainerHeader as={Animatable.View} animation="fadeInLeft" delay={500} >
      <Message>Bem-vindo(a)</Message>
    </ContainerHeader>

    <ContainerForm as={Animatable.View} animation="fadeInUp"  >
      <Title>Email</Title>
      <Input 
        placeholder='Digite um email...'
      />
      <Title>Senha</Title>
      <Input 
        placeholder='sua senha.'
      />
      <Button>
        <BtnText>Acessar</BtnText>
      </Button>
      <ButtonRegister onPress={ () => navigation.navigate('SignUp') }>
        <BtnTextRegister>Não posui uma conta? Cadastre-se</BtnTextRegister>
      </ButtonRegister>

    </ContainerForm>

   </Container>
  );
}