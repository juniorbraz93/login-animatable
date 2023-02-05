import styled from "styled-components";


export const Container = styled.View`
  flex: 1;
  background-color: #1b1c29;
`;

export const ContainerHeader = styled.View`
  margin-top: 28px;
  margin-bottom: 12px;
  padding-start: 5%;
`;


export const Message = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
`;

export const ContainerForm = styled.View`
  flex:1;
  background-color: #FFF;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-start: 5%;
  padding-end: 5%;
`;

export const Title = styled.TextInput`
  font-size: 20px;
  margin-top: 28px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  height: 40px;
  margin-bottom: 12px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #1b1c29;
  width: 100%;
  border-radius: 4px;
  padding-vertical: 8px;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const ButtonRegister = styled.TouchableOpacity`
  margin-top: 14px;
  align-self: center;
`;

export const BtnTextRegister = styled.Text`
  color: #A1A1A1;
`;
