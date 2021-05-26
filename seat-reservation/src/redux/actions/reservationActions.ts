import { ActionReservationSubmitPayload, ActionStringArrayPayload, ActionStringPayload } from "../types/Action";
import { ReservationSubmit } from "../types/ReservationSubmit";

export const SET_CHOSEN_SEATS = "SET_CHOSEN_SEATS";
export const ADD_CHOSEN_SEAT = "ADD_CHOSEN_SEAT";
export const REMOVE_CHOSEN_SEAT = "REMOVE_CHOSEN_SEAT";
export const SET_RESERVATION_SUBMIT_DATA = "SET_RESERVATION_SUBMIT_DATA";

export const setChosenSeats = (seats: string[]): ActionStringArrayPayload => ({
    type: SET_CHOSEN_SEATS,
    payload: seats,
  });
export const addChosenSeat = (seats: string): ActionStringPayload => ({
    type: ADD_CHOSEN_SEAT,
    payload: seats,
  });
  export const removeChosenSeat = (seats: string): ActionStringPayload => ({
    type: REMOVE_CHOSEN_SEAT,
    payload: seats,
  });

  export const setReservationSubmitData = (
    data: ReservationSubmit
  ): ActionReservationSubmitPayload => ({
    type: SET_RESERVATION_SUBMIT_DATA,
    payload: {
      reservation: data.reservation,
      isSubmitted: data.isSubmitted,
    },
  });