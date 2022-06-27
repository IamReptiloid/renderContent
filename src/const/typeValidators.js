import {
    isNumber,
    isContent,
    isProps,
    isFieldType,
    isBoolean,
    isString,
} from '../utils/typeValidators';
import { FieldTypes } from '../const/index';

export const typeValidators = {
    [FieldTypes.Number]: isNumber,
    [FieldTypes.String]: isString,
    [FieldTypes.Content]: isContent,
    [FieldTypes.Props]: isProps,
    [FieldTypes.Type]: isFieldType,
    [FieldTypes.Boolean]: isBoolean,
};
