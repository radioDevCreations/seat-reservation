import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { questionnaireReducer } from './questionnaireReducer';
import { reservationReducer } from './reservationReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    questionnaire: questionnaireReducer,
    reservation: reservationReducer,
});