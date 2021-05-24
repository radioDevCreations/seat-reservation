import { FC, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { setQuestionnaireSubmitData, setReservationSubmitData } from "../../../redux/actions/appActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { fontSize } from "../../../styledHelpers/fontSize";
import Row from "../../Row/Row";
import SeatProps from "../../Seat/SeatProps";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: ${fontSize[18]};
`;

const ReservationHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 1px 1px 6px -2px #000000;
  background-color: #eee;
  z-index: 2;

  position: fixed;
  top: 0;
  left: 0;
`;

const ReservationBoard = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 6px -2px #000000;
  background-color: #eee;
  padding: 20px;
`;
const ReservationForm = styled.form`
  position: relative;
  top: 20px;
  width: 90%;
  max-width: 1000px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 6px -2px #000000;
  background-color: #eee;
  padding: 20px;
`;

const ReservationPage: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const state = useAppSelector((state) => {
    const seats = state.app.seats;
    const chosen = state.app.chosenSeats;
    return { seats, chosen };
  });

  useEffect(() => {
    return () => {
      dispatch(
        setQuestionnaireSubmitData({
          isNextTo: false,
          howManySeats: 1,
          isSubmitted: false,
        })
      );
    };
  }, [dispatch]);

  const filterRowSeats = (rowNumber: number) => {
    const row = state.seats.filter((seat: SeatProps) => {
      return seat.cords.x === rowNumber;
    });
    return row;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setReservationSubmitData({
      reservation: state.chosen,
      isSubmitted: true
    }));
    history.push('/resume');
  };

  return (
    <InnerWrapper>
      <ReservationHeader>Header</ReservationHeader>
      <ReservationBoard>
        <Row seats={filterRowSeats(0)} />
        <Row seats={filterRowSeats(1)} />
        <Row seats={filterRowSeats(2)} />
        <Row seats={filterRowSeats(3)} />
        <Row seats={filterRowSeats(4)} />
        <Row seats={filterRowSeats(5)} />
        <Row seats={filterRowSeats(6)} />
        <Row seats={filterRowSeats(7)} />
        <Row seats={filterRowSeats(8)} />
        <Row seats={filterRowSeats(9)} />
      </ReservationBoard>
      <ReservationForm onSubmit={handleSubmit}>
        <Button type="submit" variant="contained" color="secondary" >
          Zarezerwuj
        </Button>
      </ReservationForm>
    </InnerWrapper>
  );
};

export default ReservationPage;
