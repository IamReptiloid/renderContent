export const initialStateContent = [
    {
        type: 'panel',
        props: {
            width: 500,
            height: 200,
            visible: true,
        },
        content: [
            {
                type: 'panel',
                props: {
                    width: 100,
                    height: 100,
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
                    {
                        type: 'button',
                        props: {
                            visible: true,
                            caption: 'button',
                        },
                    },
                ],
            },
        ],
    },
    {
        type: 'label',
        props: {
            caption: 'test',
            visible: true,
        },
    },
    {
        type: 'button',
        props: {
            width: 100,
            height: 50,
            visible: true,
            caption: 'button',
        },
    },
];
