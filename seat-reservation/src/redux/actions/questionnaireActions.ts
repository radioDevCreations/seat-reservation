import { QuestionnaireState } from "../reducers/questionnaireReducer";
import { ActionQuestionnaireStatePayload } from "../types/Action";

export const SET_QUESTIONNAIRE_SUBMIT_DATA = "SET_QUESTIONNAIRE_SUBMIT_DATA";

export const setQuestionnaireSubmitData = (
    data: QuestionnaireState
  ): ActionQuestionnaireStatePayload => ({
    type: SET_QUESTIONNAIRE_SUBMIT_DATA,
    payload: {
      isNextTo: data.isNextTo,
      howManySeats: data.howManySeats,
      isSubmitted: data.isSubmitted,
    },
  });