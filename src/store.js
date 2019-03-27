import { createStore } from "redux";
import {reducer} from '../src/reducers/reducer'

let initialState={};
export const store = createStore(reducer, initialState);