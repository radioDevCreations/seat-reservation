import { FC, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { setReservationSeats } from "../../../redux/actions/appActions";
import {setReservationSubmitData } from "../../../redux/actions/reservationActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

const InnerWrapper = styled.form`
  position: relative;
  top: 20px;
  width: 90%;
  max-width: 1000px;
  border: 1px solid ${Colors.lightgray};
  border-radius: 5px;
  box-shadow: 1px 1px 6px -2px ${Colors.black};
  background-color: ${Colors.primary};
  padding: 20px;
  display: flex;
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
`;
const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;
const LegendLabel = styled.div`
padding-right: 16px;
`;
const LegendTag = styled.div<{ innerColor: string }>`
width: 24px;
height: 24px;
border-radius: 200px;
border: 1px solid ${Colors.black};
content: '';
background-color: ${props => props.innerColor};
`;

const ReservationForm: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const state = useAppSelector((state) => {
    const chosen = state.reservation.chosenSeats;
    return { chosen };
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (state.chosen.length) {
      dispatch(
        setReservationSubmitData({
          reservation: state.chosen,
          isSubmitted: true,
        }));
        dispatch(setReservationSeats(state.chosen));
      history.push("/resume");
    }
  };

  return (
    <InnerWrapper onSubmit={handleSubmit}>
      <Button type="submit" variant="contained" color="secondary">
        Zarezerwuj
      </Button>
      <Legend>
        <LegendItem>
          <LegendLabel>wybrano</LegendLabel>
          <LegendTag innerColor = "#ee0e59"></LegendTag>
        </LegendItem>
        <LegendItem>
          <LegendLabel>zarezerwowane</LegendLabel>
          <LegendTag innerColor = "#888"></LegendTag>
        </LegendItem>
        <LegendItem>
          <LegendLabel>wolne</LegendLabel>
          <LegendTag innerColor = "#fff"></LegendTag>
        </LegendItem>
      </Legend>
    </InnerWrapper>
  );
};

export default ReservationForm;
