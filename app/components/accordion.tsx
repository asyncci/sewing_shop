import { Key, useState } from "react";
import { Line } from "./horizontalLine";

export default function Accordion({ items, counting }: any) {
    const [selected, setSelected] = useState(null);
    const onClick = (i: any) => {
        if (selected == i)
            return setSelected(null);

        console.log('goekg');

        setSelected(i);
    }

    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    items.map((item: any, i: any) => (
                        <div id='item' key={item.key}>
                            <div className={selected === i ? 'label active' : 'label'} onClick={() => onClick(i)}>
                                {
                                    counting ? <h2>{i + 1}.  {item.label}</h2> : <h2>{item.label}</h2>
                                }
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>{item.children}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}