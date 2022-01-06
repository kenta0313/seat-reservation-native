import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import { useDispatch } from 'react-redux';
import { seatSlice } from '../modules/slice/seat';
import BaseCard from '../components/BaseCard';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

export type Seats = Seat[];

export type Seat = {
  name: string;
  src: ImageSourcePropType;
  onPress?: any
};

const Seats: Seats = [
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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'TimePage'>>();
  const dispatch = useDispatch();
  const { addSeat } = seatSlice.actions;
  const handlePress = useCallback((name: Seat['name'], src: Seat['src']) => {
    dispatch(addSeat({name: name, src: src}));
    navigation.navigate('TimePage');
  },[]);
  return (
    <View style={style.container}>
      <Text style={style.title}>300円<Text style={style.value}>(税込)</Text>/30分</Text>
      <Text style={style.subtitle}>席を選択して下さい</Text>
      <View style={style.flex}>
        {Seats.map((seat, id) => (
          <BaseCard name={seat.name} src={seat.src} key={id} onPress={() => handlePress(seat.name, seat.src)} />
        ))}
      </View>
    </View>
  );
};

export default SlectPage;
