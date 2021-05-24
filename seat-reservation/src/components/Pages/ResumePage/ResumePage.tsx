import { FC, useEffect } from "react";
import styled from "styled-components";
import { setReservationSubmitData } from "../../../redux/actions/appActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import SeatProps from "../../Seat/SeatProps";

const InnerWrapper = styled.div`
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

export interface ResumePageProps {}

const ResumePage: FC<ResumePageProps> = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    const reservation = state.app.reservationState;
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
    </InnerWrapper>
  );
};

export default ResumePage;
