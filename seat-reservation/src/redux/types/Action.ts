import SeatProps from "../../components/Seat/SeatProps";
import { LoggerState } from "./LoggerState";
import { QuestionnaireSubmit } from "./QuestionnaireSubmit";
import { ReservationSubmit } from "./ReservationSubmit";

export type ActionSeatPropsArrayPayload = {
  type: string;
  payload: SeatProps[];
};
export type ActionQuestionnaireSubmitPayload = {
  type: string;
  payload: QuestionnaireSubmit;
};
export type ActionStringPayload = { type: string; payload: string };
export type ActionReservationSubmitPayload = {
  type: string;
  payload: ReservationSubmit;
};
export type ActionStringArrayPayload = { type: string; payload: string[] };
export type ActionLoggerStatePayload = { type: string; payload: LoggerState };
