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

export default function SignUp() {
  const naviagtion = useNavigation()
 return (
    <Container>

    <ContainerHeader as={Animatable.View} animation="fadeInLeft" delay={500} >
      <Message>Registre-se</Message>
    </ContainerHeader>

    <ContainerForm as={Animatable.View} animation="fadeInUp" >
      <Title>Nome da barbearia</Title>
      <Input 
        placeholder='Digite o nome da barbearia...'
      />
      <Title>Email</Title>
      <Input 
        placeholder='Digite um email...'
      />
      <Title>Senha</Title>
      <Input 
        placeholder='sua senha.'
      />
      <Button>
        <BtnText>Cadastrar</BtnText>
      </Button>
      <ButtonRegister onPress={ () => naviagtion.navigate('SignIn') } >
        <BtnTextRegister>Já posui uma conta? Faça o login</BtnTextRegister>
      </ButtonRegister>

    </ContainerForm>

  </Container>
  );
}