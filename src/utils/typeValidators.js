import {
    componentTypes,
    ComponentMainFields,
    componentFields,
    componentMainFieldsTypes,
    componentPropFields,
    typeValidators,
} from '../const/index';

export function isString(str) {
    return typeof str === 'string' || typeof str === 'number';
}

export function isFieldType(str) {
    return componentTypes.includes(str);
}

export function isContent(objects) {
    if (!Array.isArray(objects)) {
        objects = [objects];
    }

    return (
        !!objects.length &&
        objects.every?.((obj) => {
            const keys = Object.keys(obj);

            const componentType = obj[ComponentMainFields.Type];
            if (!isFieldType(componentType)) {
                return false;
            }

            const fields = componentFields[componentType];
            const isAllObjectKeysRightComponentFields = keys.every((key) =>
                fields.includes(key)
            );

            if (!isAllObjectKeysRightComponentFields) {
                return false;
            }

            return keys.every((key) => {
                const fieldType = componentMainFieldsTypes[key];
                const fieldValue = obj[key];
                const fieldValidator = typeValidators[fieldType];
                return fieldValidator(
                    fieldValue,
                    obj[ComponentMainFields.Type]
                );
            });
        })
    );
}

export function isProps(obj, componentType) {
    if (Array.isArray(obj) || typeof obj !== 'object' || obj === null) {
        return false;
    }
    const fields = componentPropFields[componentType];
    const keys = Object.keys(obj);

    return keys.every((key) => {
        const field = fields.find((field) => field.name === key);
        console.log(field);

        if (!field) {
            return false;
        }

        const validator = typeValidators[field.type];
        const fieldValue = obj[key];

        return validator(fieldValue);
    });
}

export function isPrimitive(obj, fieldName, value) {
    const fields = componentPropFields[obj[ComponentMainFields.Type]];
    const field = fields.find((field) => field.name === fieldName);

    if (!field) {
        throw new Error();
    }

    const validator =
        typeValidators[componentMainFieldsTypes[ComponentMainFields.Props]];

    return validator({ [field.name]: value }, obj[ComponentMainFields.Type]);
}

export function isNumber(str) {
    return typeof str === 'number';
}

export function isBoolean(str) {
    return typeof str === 'boolean';
}
