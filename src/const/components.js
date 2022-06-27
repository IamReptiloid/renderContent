import Button from '../component/contentСomponents/Button';
import Label from '../component/contentСomponents/Label';
import Panel from '../component/contentСomponents/Panel';

export const components = {
    label: ({ caption, ...props }, key) => (
        <Label key={key} {...props}>
            {caption}
        </Label>
    ),
    panel: (props, key, blockСontent) => (
        <Panel key={key} {...props}>
            {blockСontent}
        </Panel>
    ),
    button: ({ caption, ...props }, key) => (
        <Button key={key} {...props}>
            {caption}
        </Button>
    ),
};
