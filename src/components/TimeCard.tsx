import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { Seat } from '../pages/SlectPage';

const style = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: '#fff',
  },
  cardactions: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
  },
  buttontext: {
    fontSize: 30,
    fontWeight: '600'
  }
});

const TimeCard = (seat: Seat) => {
  return (
    <Card style={style.card}>
      <Card.Actions style={style.cardactions}>
        <Text style={style.button}>
          <Text style={style.buttontext}>{seat.name}</Text>
        </Text>
      </Card.Actions>
      <Card.Cover
        source={seat.src}
      />
    </Card>
  );
};

export default TimeCard;
