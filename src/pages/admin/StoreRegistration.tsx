import { TextInput, Text, View, StyleSheet } from 'react-native';
import React from "react";
import FormTitle from "../../components/FormTitle";

const style = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  value: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 40
  },
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

const StoreRegistration = () => {

  return (
    <View>
      <FormTitle text={'店舗管理'} />
      <Text>店舗名を入力してください</Text>
      <TextInput />
    </View>
  );
};

export default StoreRegistration;
