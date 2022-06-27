import {
    ComponentMainFields,
    componentFields,
    componentMainFieldsTypes,
    typeValidators,
} from '../const/index';
import { isContent, isPrimitive } from './typeValidators';

export default function isValidValue(pathToField, value, component) {
    if (pathToField.length === 0) {
        return isContent(value);
    }
    const fieldName = pathToField[pathToField.length - 1];
    const fields = componentFields[component[ComponentMainFields.Type]];
    const isMainField = fields.includes(fieldName);

    if (!isMainField) {
        return isPrimitive(component, fieldName, value);
    }

    const fieldType = componentMainFieldsTypes[fieldName];
    const validator = typeValidators[fieldType];

    return validator(value, component[ComponentMainFields.Type]);
}
