export const FieldTypes = {
    Number: 'number',
    Boolean: 'boolean',
    String: 'string',
    Props: 'props',
    Content: 'content',
    Type: 'type',
};

export const ComponentTypes = {
    Panel: 'panel',
    Label: 'label',
    Button: 'button',
};

export const componentTypes = [
    ComponentTypes.Panel,
    ComponentTypes.Label,
    ComponentTypes.Button,
];

export const ComponentMainFields = {
    Type: 'type',
    Props: 'props',
    Content: 'content',
};

export const componentFields = {
    [ComponentTypes.Panel]: [
        ComponentMainFields.Type,
        ComponentMainFields.Props,
        ComponentMainFields.Content,
    ],
    [ComponentTypes.Label]: [
        ComponentMainFields.Type,
        ComponentMainFields.Props,
    ],
    [ComponentTypes.Button]: [
        ComponentMainFields.Type,
        ComponentMainFields.Props,
    ],
};

export const componentMainFieldsTypes = {
    [ComponentMainFields.Content]: FieldTypes.Content,
    [ComponentMainFields.Props]: FieldTypes.Props,
    [ComponentMainFields.Type]: FieldTypes.Type,
};

export const componentPropFields = {
    [ComponentTypes.Panel]: [
        { name: 'width', type: FieldTypes.Number },
        { name: 'height', type: FieldTypes.Number },
        { name: 'visible', type: FieldTypes.Boolean },
    ],
    [ComponentTypes.Label]: [
        { name: 'caption', type: FieldTypes.String },
        { name: 'visible', type: FieldTypes.Boolean },
    ],
    [ComponentTypes.Button]: [
        { name: 'caption', type: FieldTypes.String },
        { name: 'width', type: FieldTypes.Number },
        { name: 'height', type: FieldTypes.Number },
        { name: 'visible', type: FieldTypes.Boolean },
    ],
};
