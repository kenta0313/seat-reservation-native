import { StyleSheet, View, Text } from 'react-native';
import BaseCard from '../components/BaseCard';

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
  }
});

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>300円<Text style={style.value}>(税込)</Text>/30分</Text>
      <Text style={style.subtitle}>席を選択して下さい</Text>
      <BaseCard />
    </View>
  );
};

export default HomeScreen;
