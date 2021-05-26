import SeatProps from "../../components/Seat/SeatProps";
import {
  ActionQuestionnaireSubmitPayload,
  ActionSeatPropsArrayPayload,
  ActionReservationSubmitPayload,
  ActionStringPayload,
  ActionStringArrayPayload,
  ActionLoggerStatePayload,
} from "../types/Action";
import { LoggerState } from "../types/LoggerState";
import { QuestionnaireSubmit } from "../types/QuestionnaireSubmit";
import { ReservationSubmit } from "../types/ReservationSubmit";

export const SET_QUESTIONNAIRE_SUBMIT_DATA = "SET_QUESTIONNAIRE_SUBMIT_DATA";
export const SET_RESERVATION_SUBMIT_DATA = "SET_RESERVATION_SUBMIT_DATA";
export const SET_SEATS_DATA = "SET_SEATS_DATA";
export const ADD_CHOSEN_SEAT = "ADD_CHOSEN_SEAT";
export const REMOVE_CHOSEN_SEAT = "REMOVE_CHOSEN_SEAT";
export const SET_CHOSEN_SEATS = "SET_CHOSEN_SEATS";
export const SET_RESERVATION_SEATS = "SET_RESERVATION_SEATS";
export const SET_LOGGER = "SET_LOGGER";

export const setQuestionnaireSubmitData = (
  data: QuestionnaireSubmit
): ActionQuestionnaireSubmitPayload => ({
  type: SET_QUESTIONNAIRE_SUBMIT_DATA,
  payload: {
    isNextTo: data.isNextTo,
    howManySeats: data.howManySeats,
    isSubmitted: data.isSubmitted,
  },
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

export const setSeatsData = (
  data: SeatProps[]
): ActionSeatPropsArrayPayload => ({
  type: SET_SEATS_DATA,
  payload: data,
});
export const addChosenSeat = (seats: string): ActionStringPayload => ({
  type: ADD_CHOSEN_SEAT,
  payload: seats,
});
export const removeChosenSeat = (seats: string): ActionStringPayload => ({
  type: REMOVE_CHOSEN_SEAT,
  payload: seats,
});
export const setChosenSeats = (seats: string[]): ActionStringArrayPayload => ({
  type: SET_CHOSEN_SEATS,
  payload: seats,
});
export const setReservationSeats = (
  seats: string[]
): ActionStringArrayPayload => ({
  type: SET_RESERVATION_SEATS,
  payload: seats,
});
export const setLogger = (logger: LoggerState): ActionLoggerStatePayload => ({
  type: SET_LOGGER,
  payload: logger,
});
