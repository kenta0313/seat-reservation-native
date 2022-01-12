import { StyleSheet, Text, View } from 'react-native';

const FormTitle = (props: {text: string}) => {
  return (
    <View>
      <Text>{props.text}</Text>
      <Text>*後から変更可能です</Text>
    </View>
  );
};

export default FormTitle;
