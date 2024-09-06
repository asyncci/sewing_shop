import { Card, Divider, Flex, Tag } from "antd";

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};

const categories = [
    { name: "Свитшот", key: 1 },
    { name: "Худи", key: 2 },
    { name: "Водолазка", key: 3 },
    { name: "Рубашка", key: 4 },
    { name: "Блузка", key: 5 },
    { name: "Футболка", key: 6 },
    { name: "Лонгслив", key: 7 },
];

export default function Categories() {
    return (
        <div id='categories'>
            <div id='wrapper'>
                <h1>Мы шьем:</h1>
                <div className='list'>
                    {
                        categories.map((c) => {
                            return (
                                <h2 key={c.key}>
                                    {c.name}
                                </h2>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}