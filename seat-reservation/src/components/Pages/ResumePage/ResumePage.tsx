import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setReservationSubmitData } from "../../../redux/actions/reservationActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { Colors } from "../../../styledHelpers/Colors";
import SeatProps from "../../Seat/SeatProps";

const InnerWrapper = styled.div`
  position: absolute;
  top: 60px;
  padding: 32px;
`;
const ReservationStatus = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
`;
const ReservationDescription = styled.div`
  line-height: 1.5;
`;
const ReservationDescriptionTitle = styled.div`
  margin-bottom: 4px;
`;
const ReservationItem = styled.div``;
const ReservationMessage = styled.div`
  margin-top: 16px;
  font-weight: 600;
`;
const ReturnLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${Colors.secondary};
`;

export interface ResumePageProps {}

const ResumePage: FC<ResumePageProps> = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    const reservation = state.reservation.reservationState;
    const seats = state.app.seats;
    return { reservation, seats };
  });

  useEffect(() => {
    return () => {
      dispatch(
        setReservationSubmitData({
          reservation: [],
          isSubmitted: false,
        })
      );
    };
  }, [dispatch]);

  return (
    <InnerWrapper>
      <ReservationStatus>
        Twoja rezerwacja przebiegła pomyślnie!
      </ReservationStatus>
      <ReservationDescription>
        <ReservationDescriptionTitle>
          Wybrałeś miejsca:
        </ReservationDescriptionTitle>
        {state.reservation.map((item: string) => {
          const seatData = state.seats.filter((seat: SeatProps) => {
            return seat.id === item;
          });
          return (
            <ReservationItem key={item}>
              - rząd {seatData[0].cords.x}, miejsce {seatData[0].cords.y} (
              {item})
            </ReservationItem>
          );
        })}
      </ReservationDescription>
      <ReservationMessage>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.{" "}
        <ReturnLink to="/">Powrót</ReturnLink>
      </ReservationMessage>
    </InnerWrapper>
  );
};

export default ResumePage;
