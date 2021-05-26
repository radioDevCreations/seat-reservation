import { AnyAction } from "redux";
import {
  SET_CHOSEN_SEATS,
  ADD_CHOSEN_SEAT,
  REMOVE_CHOSEN_SEAT,
  SET_RESERVATION_SUBMIT_DATA,
} from "../actions/reservationActions";

export interface ReservationState {
  reservationState: string[];
  isSubmitted: boolean;
  chosenSeats: string[];
}

const initialState = {
  reservationState: [],
  isSubmitted: false,
  chosenSeats: [],
};

export const reservationReducer = (
  state: ReservationState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_CHOSEN_SEATS:
      return {
        ...state,
        chosenSeats: action.payload,
      };
    case ADD_CHOSEN_SEAT:
      return {
        ...state,
        chosenSeats: [...state.chosenSeats, action.payload],
      };
    case REMOVE_CHOSEN_SEAT:
      const newChosenSeats = state.chosenSeats;
      newChosenSeats.splice(state.chosenSeats.indexOf(action.payload), 1);
      return {
        ...state,
        chosenSeats: newChosenSeats,
      };
    case SET_RESERVATION_SUBMIT_DATA:
      return {
        ...state,
        reservationState: [...action.payload.reservation],
        isSubmitted: action.payload.isSubmitted,
      };

    default:
      return state;
  }
};
