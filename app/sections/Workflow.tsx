import { Col, Collapse, CollapseProps } from "antd";
import { Line } from "~/components/horizontalLine";

const panelStyle: React.CSSProperties = {
    border: 'none',
    backgroundColor: 'white',
};


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

export default function Workflow() {
    const onChange = (key: string| string[]) => {
        console.log(key);
    };

    return (
        <div id='workflow' className="shadow-fly">
            <div id='wrapper'>
                <div id='inner'>
                    <h1>Этапы работы</h1>
                    <Line/>
                </div>
                <div id='second-inner'>
                    <Collapse onChange={onChange} items={items}/>;
                </div>
            </div>
        </div>
    )
}