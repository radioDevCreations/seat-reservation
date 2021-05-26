import { FC, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import QuestionnairePage from "../Pages/QuestionnairePage/QuestionnairePage";
import ReservationPage from "../Pages/ReservationPage/ReservationPage";
import ResumePage from "../Pages/ResumePage/ResumePage";
import ReservationLogger from "../ReservationLogger/ReservationLogger";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setSeatsData } from "../../redux/actions/appActions";
import { fontSize } from "../../styledHelpers/fontSize";
import { Colors } from "../../styledHelpers/Colors";

const InnerWrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;

  width: 100vw;
  height: 100vh;
`;

const ReservationHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${Colors.lightgray};
  box-shadow: 1px 1px 6px -2px ${Colors.black};
  background-color: ${Colors.primary};
  z-index: 2;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
`;
const ReservationHeaderTitle = styled.div`
  padding-left: 20px;
  font-size: ${fontSize[20]};
  color: ${Colors.secondary};
  text-transform: uppercase;
  font-weight: 600;
`;

const App: FC = () => {
  const state = useAppSelector((state) => {
    const isQuestionnarySubmitted = state.questionnaire.isSubmitted;
    const isReservationSubmitted = state.reservation.isSubmitted;
    const loggerText = state.app.logger.loggerText;
    const logger = state.app.logger.logger;

    return {
      isQuestionnarySubmitted,
      isReservationSubmitted,
      loggerText,
      logger,
    };
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/seats")
      .then((response) => response.json())
      .then((data) => dispatch(setSeatsData(data)));
  }, [dispatch]);

  return (
    <InnerWrapper>
      <ReservationHeader>
        <ReservationHeaderTitle>Rezerwacja miejsc</ReservationHeaderTitle>
        <ReservationLogger
          loggerText={state.loggerText}
          logger={state.logger}
        />
      </ReservationHeader>

      <Switch>
        <Route path="/" exact>
          <QuestionnairePage />
        </Route>
        {!state.isQuestionnarySubmitted && !state.isReservationSubmitted ? (
          <Redirect to="/"></Redirect>
        ) : (
          <Route path="/reservation">
            <ReservationPage />
          </Route>
        )}
        {state.isReservationSubmitted ? (
          <Route path="/resume">
            <ResumePage />
          </Route>
        ) : (
          <Redirect to="/"></Redirect>
        )}
      </Switch>
    </InnerWrapper>
  );
};

export default App;
