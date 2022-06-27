import { isContent } from '../../utils/typeValidators';

export function normalizeValue(value) {
    if (Array.isArray(value)) {
        return value.map((el) => {
            if (isContent(el) && !el.content) {
                el.content = [];
            }
            return el;
        });
    }
    if (isContent(value) && !value.content) {
        value.content = [];
    }
    return value;
}

export function setNewValue(state, pathToField, value) {
    const addArr = (state, value) => {
        state.push(...(Array.isArray(value) ? value : [value])); // TODO
    };
    if (pathToField.length) {
        const [obj, paramsField] = getField(pathToField, state);

        if (Array.isArray(obj[paramsField])) {
            addArr(obj[paramsField], value);
        } else {
            obj[paramsField] = value;
        }
    } else {
        addArr(state, value);
    }
}

export function getField(pathToField, state) {
    for (let i = 0; i < pathToField.length - 1; i++) {
        state = state[pathToField[i]];
    }
    return [state, pathToField[pathToField.length - 1]];
}

export function getComponent(params, state) {
    if (params.length !== 0) {
        params.forEach((el) => {
            state = state[el];
        });
    }
    return state;
}
