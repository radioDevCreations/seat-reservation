import { AnyAction } from "redux";
import SeatProps from "../../components/Seat/SeatProps";
import {
  SET_QUESTIONNAIRE_SUBMIT_DATA,
  SET_SEATS_DATA,
  REMOVE_CHOSEN_SEAT,
  ADD_CHOSEN_SEAT,
  SET_RESERVATION_SUBMIT_DATA,
  SET_CHOSEN_SEATS,
  SET_RESERVATION_SEATS,
  SET_LOGGER,
} from "../actions/appActions";
import { LoggerState } from "../types/LoggerState";

export interface AppState {
  questionnaireState: {
    isNextTo: boolean;
    howManySeats: number;
  };
  isQuestionnaireSubmitted: boolean;

  reservationState: string[];
  isReservationSubmitted: boolean;

  seats: SeatProps[];
  chosenSeats: string[];

  logger: LoggerState;
}

const initialState = {
  questionnaireState: {
    isNextTo: false,
    howManySeats: 1,
  },
  isQuestionnaireSubmitted: false,

  reservationState: [],
  isReservationSubmitted: false,

  seats: [],
  chosenSeats: [],

  logger: {} as LoggerState
};

export const appReducer = (
  state: AppState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_QUESTIONNAIRE_SUBMIT_DATA:
      return {
        ...state,
        questionnaireState: {
          isNextTo: action.payload.isNextTo,
          howManySeats: action.payload.howManySeats,
        },
        isQuestionnaireSubmitted: action.payload.isSubmitted,
      };
    case SET_RESERVATION_SUBMIT_DATA:
      return {
        ...state,
        reservationState: [...action.payload.reservation],
        isReservationSubmitted: action.payload.isSubmitted,
      };
    case SET_SEATS_DATA:
      return {
        ...state,
        seats: action.payload,
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
    case SET_CHOSEN_SEATS:
      return {
        ...state,
        chosenSeats: action.payload,
      };
    case SET_RESERVATION_SEATS:
      const newSeats = [...state.seats];
      newSeats.forEach((seat: SeatProps) => {
        if(action.payload.includes(seat.id)){
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
