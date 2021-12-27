import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
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

export type SeatsProps = Seats[];

export type Seats = {
  name: string;
  src: ImageSourcePropType;
};

const Seats: SeatsProps = [
  {
    name: 'テーブル席',
    src: require('../../public/table.jpg')
  },
  {
    name: '個室席',
    src: require('../../public/seat_1.jpg')
  },
];

const SlectPage = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>300円<Text style={style.value}>(税込)</Text>/30分</Text>
      <Text style={style.subtitle}>席を選択して下さい</Text>
      {Seats.map((seat, id) => (
        <View key={id}>
          <BaseCard {...seat} />
        </View>
      ))}
    </View>
  );
};

export default SlectPage;
