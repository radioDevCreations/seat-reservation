import { FC, useEffect } from "react";
import styled from "styled-components";
import { setChosenSeats } from "../../../redux/actions/reservationActions";
import { setQuestionnaireSubmitData } from "../../../redux/actions/questionnaireActions";
import {
  useAppDispatch,
  useAppSelector,
  useLogger,
} from "../../../redux/hooks/hooks";
import { fontSize } from "../../../styledHelpers/fontSize";
import Row from "../../Row/Row";
import ReservationForm from "./ReservationForm";
import SeatProps from "../../Seat/SeatProps";
import { Colors } from "../../../styledHelpers/Colors";

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

const ReservationBoard = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  border: 1px solid ${Colors.lightgray};
  border-radius: 5px;
  box-shadow: 1px 1px 6px -2px ${Colors.black};
  background-color: ${Colors.primary};
  padding: 20px;
`;

const ReservationPage: FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    const seats = state.app.seats;
    const questionnaireHowManySeats = state.questionnaire.howManySeats;
    const questionnaireIsNextTo = state.questionnaire.isNextTo;
    return { seats, questionnaireHowManySeats, questionnaireIsNextTo };
  });
  const logger = useLogger(
    `W tym momencie nie ma na sali ${state.questionnaireHowManySeats} wolnych miejsc obok siebie.`
  );

  useEffect(() => {
    const newChosen: string[] = [];
    switch (state.questionnaireIsNextTo) {
      case true: //the seats are to be next to each other
        try {
          for (let i = 0; i < 10; i++) {
            const seats = state.seats.filter(
              (seat: SeatProps) => seat.cords.x === i
            );
            for (let i = 0; i < seats.length; i++) {
              if (seats[i].reserved === false) {
                newChosen.push(seats[i].id);
                if (newChosen.length === state.questionnaireHowManySeats) break;
              } else {
                newChosen.length = 0;
              }
            }
            if (newChosen.length === state.questionnaireHowManySeats) {
              dispatch(setChosenSeats(newChosen));
              break;
            }
            newChosen.length = 0;
            if (i === 9)
              throw new Error(
                `W tym momencie nie ma na sali ${state.questionnaireHowManySeats} wolnych miejsc obok siebie.`
              );
          }
        } catch (error) {
          logger();
          dispatch(setChosenSeats([]));
        }
        break;

      case false: //the seats aren't to be next to each other
        for (let i = 0; i < state.seats.length; i++) {
          const seat = state.seats[i];
          if (seat.reserved === false) {
            newChosen.push(seat.id);
          }
          if (newChosen.length === state.questionnaireHowManySeats) {
            dispatch(setChosenSeats(newChosen));
            break;
          }
        }
        break;
      default:
        console.warn("Coś poszło nie tak!");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dispatch,
    state.questionnaireHowManySeats,
    state.questionnaireIsNextTo,
    state.seats,
  ]);

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

  return (
    <InnerWrapper>
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
      <ReservationForm />
    </InnerWrapper>
  );
};

export default ReservationPage;
