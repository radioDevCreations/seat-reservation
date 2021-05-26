import SeatProps from "../../components/Seat/SeatProps";
import { QuestionnaireState } from "../reducers/questionnaireReducer";
import { LoggerState } from "./LoggerState";

export type ActionSeatPropsArrayPayload = {
  type: string;
  payload: SeatProps[];
};
export type ActionQuestionnaireStatePayload = {
  type: string;
  payload: QuestionnaireState;
};
export type ActionStringPayload = { type: string; payload: string };
export type ActionStringArrayPayload = { type: string; payload: string[] };
export type ActionLoggerStatePayload = { type: string; payload: LoggerState };
