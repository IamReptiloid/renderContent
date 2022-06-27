import { createSlice } from '@reduxjs/toolkit';
import { getParams, getComponentPath } from '../../utils/pathHelper';
import { parseJson } from '../../utils/parseJsonHelper';
import { initialStateContent } from '../const/initialStateContent';
import isValidValue from '../../utils/validatorValue';
import {
    normalizeValue,
    getComponent,
    setNewValue,
} from '../utils/contentHelpers';
export const counterSlice = createSlice({
    name: 'content',
    initialState: {
        content: initialStateContent,
        pathValid: true,
        valueValid: true,
    },

    reducers: {
        setParams(state, action) {
            try {
                const path = action.payload.path;
                const newValue = action.payload.newValue;
                const parseValue = parseJson(newValue);
                const value = parseValue === null ? newValue : parseValue;
                const pathToField = getParams(action.payload.path);
                let component = state.content;
                if (pathToField.length) {
                    const pathToComponent = getComponentPath(path, pathToField);
                    component = getComponent(pathToComponent, state.content);
                }
                if (isValidValue(pathToField, value, component)) {
                    state.valueValid = true;
                    const normalizedValue = normalizeValue(value);
                    setNewValue(state.content, pathToField, normalizedValue);
                } else {
                    state.valueValid = false;
                }
            } catch (_) {
                state.valueValid = true;
                state.pathValid = false;
            }
        },

        setInvalidPath(state) {
            state.pathValid = false;
        },

        setValidPath(state) {
            state.pathValid = true;
        },

        setValidValue(state) {
            state.valueValid = true;
        },
    },
});

export const { setParams, setInvalidPath, setValidPath, setValidValue } =
    counterSlice.actions;

export default counterSlice.reducer;
