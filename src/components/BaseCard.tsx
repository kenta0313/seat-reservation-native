import { StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { basecolor, boldcolor } from '../constant';
import { Seat } from '../pages/Home';

const style = StyleSheet.create({
  card: {
    width: 400,
    backgroundColor: '#fff',
  },
  cardcover: {
    height: 250
  },
  cardactions: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: basecolor,
    width: 300,
    height: 60,
    borderBottomWidth: 4,
    borderBottomColor: boldcolor

  },
  buttontext: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600'
  }
});

const BaseCard = (seat: Seat) => {
  return (
    <Button onPress={seat.onPress}>
      <Card style={style.card}>
        <Card.Cover
        style={style.cardcover}
          source={seat.src}
        />
        <Card.Actions style={style.cardactions}>
          <Button style={style.button} mode="contained">
            <Text style={style.buttontext}>{seat.name}</Text>
          </Button>
        </Card.Actions>
      </Card>
    </Button>
  );
};

export default BaseCard;
