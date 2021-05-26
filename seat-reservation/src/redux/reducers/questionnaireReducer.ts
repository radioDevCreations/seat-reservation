import { AnyAction } from "redux";
import { SET_QUESTIONNAIRE_SUBMIT_DATA } from "../actions/questionnaireActions";

export interface QuestionnaireState {
  isNextTo: boolean;
  howManySeats: number;
  isSubmitted: boolean;
}

const initialState = {
  isNextTo: false,
  howManySeats: 1,
  isSubmitted: false,
};

export const questionnaireReducer = (
  state: QuestionnaireState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_QUESTIONNAIRE_SUBMIT_DATA:
      return {
        ...state,
        isNextTo: action.payload.isNextTo,
        howManySeats: action.payload.howManySeats,
        isSubmitted: action.payload.isSubmitted,
      };
    default:
      return state;
  }
};
