import isValidValue from '../utils/validatorValue';

describe('validatorValue', () => {
    describe('label validation', () => {
        const obj = {
            type: 'label',
            props: {
                caption: 'test',
                visible: true,
            },
        };
        describe('change caption', () => {
            test('should return true', () => {
                const pathToField = ['props', 'caption'];
                const value = 'span';
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('should return false', () => {
                const pathToField = ['props', 'caption'];
                const value = false;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('change type', () => {
            test('should return true', () => {
                const pathToField = ['type'];
                expect(isValidValue(pathToField, 'button', obj)).toBe(true);
                expect(isValidValue(pathToField, 'panel', obj)).toBe(true);
            });

            test('change type should return false', () => {
                const pathToField = ['type'];
                let value = 'test';
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('change props', () => {
            const pathToField = ['props'];

            test('change props should return true', () => {
                const pathToField = ['props'];
                const value = {
                    caption: 'hhh',
                    visible: false,
                };
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('with value visible equal string should return false', () => {
                const value = {
                    caption: 'test',
                    visible: 'false',
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value undefined should return false', () => {
                const value = undefined;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value array should return false', () => {
                const value = [
                    {
                        caption: 'test',
                        visible: 'false',
                    },
                ];
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value null should return false', () => {
                const value = null;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value string should return false', () => {
                const value = 'test';
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with missing property should return false', () => {
                const value = {
                    caption: 'test',
                    visible: false,
                    test: 'test',
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('add content', () => {
            test('should return throw Error', () => {
                const pathToField = ['content'];
                const value = {
                    type: 'panel',
                };
                expect(() => isValidValue(pathToField, value, obj)).toThrow();
            });
        });
    });

    describe('panel validation', () => {
        let obj;

        beforeEach(() => {
            obj = {
                type: 'panel',
                props: {
                    width: 200,
                    height: 200,
                    visible: true,
                },
                content: [
                    {
                        type: 'label',
                        props: {
                            caption: 'test',
                            visible: true,
                        },
                    },
                ],
            };
        });

        describe('change type', () => {
            test('should return true', () => {
                const pathToField = ['props', 'type'];
                const value = 'button';
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('should return false', () => {
                const pathToField = ['props', 'type'];
                const value = 'test';
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('add content', () => {
            const pathToField = ['content'];
            test('with value valid object should return true', () => {
                const value = { type: 'panel' };
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('with valid value array should return false', () => {
                const value = [{ type: 'panel' }];
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('with invalid value object should return false', () => {
                const value = { type: 'test' };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with invalid value array should return false', () => {
                const value = [{ type: 'button', props: { width: 'dsfg' } }];
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with empty value object should return false', () => {
                const value = {};
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with empty value array should return false', () => {
                const value = [];
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value invalid complex invalid object should return false', () => {
                const value = {
                    type: 'panel',
                    props: {
                        width: 200,
                        height: 200,
                        visible: true,
                    },
                    content: [
                        {
                            type: 'label',
                            props: {
                                caption: 'test',
                                visible: 'true',
                            },
                        },
                    ],
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value valid complex invalid object should return true', () => {
                const value = {
                    type: 'panel',
                    props: {
                        width: 200,
                        height: 200,
                        visible: true,
                    },
                    content: [
                        {
                            type: 'label',
                            props: {
                                caption: 'test',
                                visible: true,
                            },
                        },
                    ],
                };
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('to an object with no properties content should return true', () => {
                obj = { type: 'panel' };
                const value = { type: 'panel' };
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });
        });

        describe('change props', () => {
            const pathToField = ['props'];

            test('change props should return true', () => {
                const pathToField = ['props'];
                const value = {
                    width: 123,
                    visible: false,
                };
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('with value visible equal string should return false', () => {
                const value = {
                    visible: 'false',
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value undefined should return false', () => {
                const value = undefined;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value array should return false', () => {
                const value = [
                    {
                        width: 123,
                        visible: 'false',
                    },
                ];
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value null should return false', () => {
                const value = null;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value string should return false', () => {
                const value = 'test';
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with missing property should return false', () => {
                const value = {
                    visible: false,
                    test: 'test',
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });
    });

    describe('button validation', () => {
        const obj = {
            type: 'button',
            props: {
                width: 123,
                height: 432,
                caption: 'test',
                visible: true,
            },
        };
        describe('change caption', () => {
            test('should return true', () => {
                const pathToField = ['props', 'caption'];
                const value = 'span';
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('should return false', () => {
                const pathToField = ['props', 'caption'];
                const value = false;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('change type', () => {
            test('should return true', () => {
                const pathToField = ['type'];
                expect(isValidValue(pathToField, 'button', obj)).toBe(true);
                expect(isValidValue(pathToField, 'panel', obj)).toBe(true);
            });

            test('change type should return false', () => {
                const pathToField = ['type'];
                let value = 'test';
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('change props', () => {
            const pathToField = ['props'];

            test('with valid value change props should return true', () => {
                const pathToField = ['props'];
                const value = {
                    caption: 'hhh',
                    visible: false,
                };
                expect(isValidValue(pathToField, value, obj)).toBe(true);
            });

            test('with value visible equal string should return false', () => {
                const value = {
                    caption: 'test',
                    visible: 'false',
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value undefined should return false', () => {
                const value = undefined;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value array should return false', () => {
                const value = [
                    {
                        caption: 'test',
                        visible: 'false',
                    },
                ];
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value null should return false', () => {
                const value = null;
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with value string should return false', () => {
                const value = 'test';
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });

            test('with missing property should return false', () => {
                const value = {
                    caption: 'test',
                    visible: false,
                    test: 'test',
                };
                expect(isValidValue(pathToField, value, obj)).toBe(false);
            });
        });

        describe('add content', () => {
            test('should return throw Error', () => {
                const pathToField = ['content'];
                const value = {
                    type: 'panel',
                };
                expect(() => isValidValue(pathToField, value, obj)).toThrow();
            });
        });
    });
});
