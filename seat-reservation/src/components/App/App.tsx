import { FC, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect} from "react-router-dom";
import "./App.scss";

import QuestionnairePage from "../Pages/QuestionnairePage/QuestionnairePage";
import ReservationPage from "../Pages/ReservationPage/ReservationPage";
import ResumePage from "../Pages/ResumePage/ResumePage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setSeatsData } from "../../redux/actions/appActions";

const InnerWrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;

  width: 100vw;
  height: 100vh;
`;

const App: FC = () => {
  const state = useAppSelector((state) => {
    const isQuestionnarySubmitted = state.app.isQuestionnaireSubmitted;
    const isReservationSubmitted = state.app.isReservationSubmitted;
    return { isQuestionnarySubmitted, isReservationSubmitted };
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/seats')
    .then(response => response.json())
    .then(data =>  dispatch(setSeatsData(data)))
  }, [dispatch])

  return (
    <InnerWrapper>
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
