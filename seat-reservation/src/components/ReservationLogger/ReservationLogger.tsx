import { FC } from "react";

export interface ReservationLoggerProps {
  logger: boolean;
  loggerText: string;
}

const ReservationLogger: FC<ReservationLoggerProps> = ({
  logger,
  loggerText,
}) => {
  return <>{logger ? <span>{loggerText}</span> : null}</>;
};

export default ReservationLogger;
