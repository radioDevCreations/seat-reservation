import { AnyAction } from "redux";
import SeatProps from "../../components/Seat/SeatProps";
import {
  SET_SEATS_DATA,
  SET_RESERVATION_SEATS,
  SET_LOGGER,
} from "../actions/appActions";
import { LoggerState } from "../types/LoggerState";

export interface AppState {
  seats: SeatProps[];
  logger: LoggerState;
}

const initialState = {
  seats: [],
  logger: {} as LoggerState,
};

export const appReducer = (
  state: AppState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_SEATS_DATA:
      return {
        ...state,
        seats: action.payload,
      };
    case SET_RESERVATION_SEATS:
      const newSeats = [...state.seats];
      newSeats.forEach((seat: SeatProps) => {
        if (action.payload.includes(seat.id)) {
          seat.reserved = true;
        }
      });
      return {
        ...state,
        seats: newSeats,
      };
    case SET_LOGGER:
      return {
        ...state,
        logger: action.payload,
      };
    default:
      return state;
  }
};
