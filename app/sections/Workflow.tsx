
import Accordion from "~/components/accordion";
import { Line } from "~/components/horizontalLine";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome gudawokdwaokdoawkdoawkdoawkdest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome gudawokdwaokdoawkdoawkdoawkdest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome gudawokdwaokdoawkdoawkdoawkdest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome gudawokdwaokdoawkdoawkdoawkdest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
];

export default function Workflow() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div id='workflow' className="shadow-fly desc-card">
      <div id='wrapper'>
        <div id='inner'>
          <h1>Этапы работы</h1>
          <Line />
        </div>
        <div id='second-inner'>
          <Accordion items={items} counting/>
        </div>
      </div>
    </div>
  )
}