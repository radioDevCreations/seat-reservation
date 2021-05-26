import SeatProps from "../../components/Seat/SeatProps";
import {
  ActionSeatPropsArrayPayload,
  ActionStringArrayPayload,
  ActionLoggerStatePayload,
} from "../types/Action";
import { LoggerState } from "../types/LoggerState";

export const SET_SEATS_DATA = "SET_SEATS_DATA";
export const SET_RESERVATION_SEATS = "SET_RESERVATION_SEATS";
export const SET_LOGGER = "SET_LOGGER";


export const setSeatsData = (
  data: SeatProps[]
): ActionSeatPropsArrayPayload => ({
  type: SET_SEATS_DATA,
  payload: data,
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
