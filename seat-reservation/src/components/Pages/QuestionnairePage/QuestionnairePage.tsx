import { FC, useState, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";
import { fontSize } from "../../../styledHelpers/fontSize";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { setQuestionnaireSubmitData } from "../../../redux/actions/questionnaireActions";
import { Colors } from "../../../styledHelpers/Colors";

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: ${fontSize[18]};
`;

const QuestionnaireForm = styled.form`
  width: 480px;
  height: 380px;
  border: 1px solid ${Colors.lightgray};
  border-radius: 5px;
  box-shadow: 1px 1px 6px -2px ${Colors.black};
  background-color: ${Colors.primary};
`;

const Field = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

const QuestionnairePage: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [isNextTo, setIsNextTo] = useState(false);
  const [howManySeats, setHowManySeats] = useState(1);

  const handleRadioChange = () => {
    setIsNextTo(!isNextTo);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      setQuestionnaireSubmitData({
        isNextTo,
        howManySeats,
        isSubmitted: true,
      })
    );
    history.push("/reservation");
  };

  const handleHowManySeatsChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > 10) setHowManySeats(10);
    else if (+event.target.value < 0) setHowManySeats(0);
    else setHowManySeats(+event.target.value);
  };

  return (
    <InnerWrapper>
      <QuestionnaireForm onSubmit={handleSubmit}>
        <Field>
          <InputLabel
            htmlFor="how-many"
            style={{
              paddingRight: "20px",
              color: Colors.black,
              fontWeight: 600,
            }}
          >
            Liczba miejsc:{" "}
          </InputLabel>
          <Input
            type="number"
            name="how-many"
            id="how-many"
            color="secondary"
            style={{
              width: "60px",
              textAlign: "center",
            }}
            value={howManySeats}
            onChange={handleHowManySeatsChange}
          />
        </Field>
        <Field>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              style={{
                color: Colors.black,
                fontWeight: 600,
                marginBottom: "20px",
                zIndex: 10,
              }}
            >
              Czy miejsca mają być obok siebie
            </FormLabel>
            <RadioGroup
              aria-label="is-next-to"
              name="is-next-to-group"
              value={isNextTo}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value={true}
                control={<Radio color="secondary" />}
                label="Tak"
              />
              <FormControlLabel
                value={false}
                control={<Radio color="secondary" />}
                label="Nie ma to dla mnie znaczenia"
              />
            </RadioGroup>
          </FormControl>
        </Field>
        <Field>
          <Button type="submit" variant="contained" color="secondary">
            Wybierz miejsca
          </Button>
        </Field>
      </QuestionnaireForm>
    </InnerWrapper>
  );
};

export default QuestionnairePage;
