import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/fontSize";

const InnerWrapper = styled.span`
  position: absolute;
  right: 32px;
  color: ${Colors.warn};
  font-size: ${fontSize[18]};
`;

export interface ReservationLoggerProps {
  logger: boolean;
  loggerText: string;
}

export const ReservationLogger: FC<ReservationLoggerProps> = ({
  logger,
  loggerText,
}) => {
  return <>{logger ? <InnerWrapper>{loggerText}</InnerWrapper> : null}</>;
};

export default ReservationLogger;