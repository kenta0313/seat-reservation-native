import { TextInput, Text, View, StyleSheet } from 'react-native';
import React from "react";
import FormTitle from "../../components/FormTitle";
import { useForm } from 'react-hook-form';

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
  const {
    register,
    formState: {errors}
  } = useForm({
    mode: "onChange",
    criteriaMode: 'all',
    shouldFocusError: false,
  })
  return (
    <View>
      <FormTitle text={'店舗管理'} />
      <form>
        <input type="text" {...register('required', {required: true})} />
        {errors.required && '必須項目です'}
      </form>
      <Text>店舗名を入力してください</Text>
      <TextInput />
    </View>
  );
};

export default StoreRegistration;
