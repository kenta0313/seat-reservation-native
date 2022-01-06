import { View } from "react-native";
import { useSelector } from "react-redux";
import { seatSelector } from "../modules/selector";
import TimeCard from '../components/TimeCard';

const TimePage = () => {
  const seat = useSelector(seatSelector);
  return (
    <View>
      <TimeCard name={seat.name} src={seat.src} />
    </View>
  );
};

export default TimePage;
