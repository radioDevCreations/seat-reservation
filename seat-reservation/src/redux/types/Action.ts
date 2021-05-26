import SeatProps from "../../components/Seat/SeatProps";
import { QuestionnaireState } from "../reducers/questionnaireReducer";
import { LoggerState } from "./LoggerState";
import { ReservationSubmit } from "./ReservationSubmit";

export type ActionSeatPropsArrayPayload = {
  type: string;
  payload: SeatProps[];
};
export type ActionQuestionnaireStatePayload = {
  type: string;
  payload: QuestionnaireState;
};
export type ActionStringPayload = { type: string; payload: string };
export type ActionReservationSubmitPayload = {
  type: string;
  payload: ReservationSubmit;
};
export type ActionStringArrayPayload = { type: string; payload: string[] };
export type ActionLoggerStatePayload = { type: string; payload: LoggerState };
