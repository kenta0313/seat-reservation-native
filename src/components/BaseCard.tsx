import { StyleSheet, View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

const style = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#fff'
  },
});

const BaseCard = () => {
  return (
    <Card style={style.card}>
      <Card.Cover
        source={require('../../public/seat_1.jpg')}
      />
      <Card.Actions>
        <Button color='#10B981' mode="contained">Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default BaseCard;
