import { AnyAction } from "redux";
import SeatProps from "../../components/Seat/SeatProps";
import { SET_QUESTIONNAIRE_SUBMIT_DATA, SET_SEATS_DATA, REMOVE_CHOSEN_SEAT, ADD_CHOSEN_SEAT, SET_RESERVATION_SUBMIT_DATA } from "../actions/appActions";

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
}

const initialState = {
  questionnaireState: {
    isNextTo: false,
    howManySeats: 1
  },
  isQuestionnaireSubmitted: false,

  reservationState: [],
  isReservationSubmitted: false,

  seats: [],
  chosenSeats: [],
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
        isQuestionnaireSubmitted: action.payload.isSubmitted
      };
      case SET_RESERVATION_SUBMIT_DATA:
      return {
        ...state,
        reservationState: [...action.payload.reservation],
        isReservationSubmitted: action.payload.isSubmitted
      };
      case SET_SEATS_DATA:
      return {
        ...state,
        seats: action.payload
      };
      case ADD_CHOSEN_SEAT:
      return {
        ...state,
        chosenSeats: [...state.chosenSeats, action.payload]
      };
      case REMOVE_CHOSEN_SEAT:
        const newSeats = state.chosenSeats;
        newSeats.splice(state.chosenSeats.indexOf(action.payload), 1);
      return {
        ...state,
        chosenSeats: newSeats
      };
      
    default:
      return state;
  }
};
