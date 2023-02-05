import React from 'react';
import { 
  Container, 
  ContainerImage, 
  Image, 
  ContainerForm, 
  Title, 
  Login, 
  Button, 
  BtnText 
} from './styles'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation()
 return (
   <Container>

    <ContainerImage>
      <Animatable.Image
        animation='flipInY'
        source={require('../../assets/logo.png')}
        resizeMode="contain"
      />
    </ContainerImage>
    <ContainerForm as={Animatable.View } animation='fadeInUp'  delay={600} >
      <Title>Monitore, organize os gastos da sua barbearia!</Title>
      <Login>Faça o login para começar</Login>

      <Button onPress={( ) => navigation.navigate('SignIn')}>
        <BtnText>Acessar</BtnText>
      </Button>
    </ContainerForm>
   </Container>
  );
}