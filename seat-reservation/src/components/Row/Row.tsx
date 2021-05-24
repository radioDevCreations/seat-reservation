import { FC } from "react";
import styled from "styled-components";
import Seat from "../Seat/Seat";
import SeatProps from "../Seat/SeatProps";
import RowProps from "./RowProps";

const InnerWrapper = styled.div`
display: flex;
margin: 12px 0;
justify-content: center;
`;

const Row: FC<RowProps> = ({seats}) => {
    return ( 
        <InnerWrapper>
        {seats.map((seat: SeatProps) => {
            return (
              <Seat
                id={seat.id}
                cords={seat.cords}
                reserved={seat.reserved}
                key={seat.id}
              />
            );
          })}
          </InnerWrapper>
     );
}
 
export default Row;