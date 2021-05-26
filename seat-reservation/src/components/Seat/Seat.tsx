import { FC } from "react";
import styled from "styled-components";
import {
  addChosenSeat,
  removeChosenSeat,
} from "../../redux/actions/reservationActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/fontSize";
import { cannotSelect } from "../../styledHelpers/styledFunctions";
import SeatProps from "./SeatProps";

const InnerWrapper = styled.div<{ reserved: boolean; isChosen: boolean }>`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  border: 1px solid ${Colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.reserved) {
      return Colors.gray;
    } else if (props.isChosen) {
      return Colors.secondary;
    } else {
      return Colors.white;
    }
  }};
  ${cannotSelect()};
  cursor: pointer;
  :hover{
    background-color: ${(props) => {return props.reserved || props.isChosen?null:Colors.seatHover}};
  }
`;
const Label = styled.span`
  font-size: ${fontSize[14]};
`;

const Seat: FC<SeatProps> = ({ id, reserved }) => {
  const state = useAppSelector((state) => {
    const chosen = state.reservation.chosenSeats;
    return { chosen };
  });
  const dispatch = useAppDispatch();
  const isChosen = state.chosen.includes(id);
  const handleSeatClick = () => {
    if (!reserved) {
      if (isChosen) {
        dispatch(removeChosenSeat(id));
      } else if (!isChosen && state.chosen.length < 10) {
        dispatch(addChosenSeat(id));
      }
    }
  };

  return (
    <InnerWrapper
      reserved={reserved}
      isChosen={isChosen}
      onClick={handleSeatClick}
    >
      <Label>{id}</Label>
    </InnerWrapper>
  );
};

export default Seat;
