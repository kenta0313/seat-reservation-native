import { View, Text } from "react-native";

const BaseForm = (text: string) => {
  return (
    <View>
      <Text>{text}</Text>
      <input type="text" />
    </View>
  );
};

export default BaseForm;
