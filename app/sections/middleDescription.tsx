import { Carousel, ConfigProvider } from "antd";
import { Line } from "../components/horizontalLine";

const images = [
    { link: "/carousel/1.jpg", key: 1 },
    { link: "/carousel/2.jpg", key: 2 },
];

export default function MiddleDescription() {
    return (
        <div id='middle' className="shadow-fly">
            <div id='inner'>
                <h1>С нами быстро, надежно, качественно</h1>
                <Line />
                <p>Швейная фабрика ESTA производит одежду с марта 2022 года. За 2 года мы произвели более 200.000 единиц продукции разного кроя. Выпускаем одежду под собственным брендом и принимаем заказы на пошив и аутсорсинг.

                    Мы предлагаем : полный цикл производства, начиная от разработки дизайна, брендирования и заканчивая готовой продукцией.</p>
            </div>
            <div id='second-inner'>


                <ConfigProvider theme={{
                    components: {
                        Carousel: {
                            arrowSize: 40,
                            arrowOffset: -50
                        }
                    }
                }}>
                    <Carousel arrows id='carousel' >
                        {
                            images.map((s) => {
                                return (
                                    <img src={s.link} alt="image" key={s.key} />
                                )
                            })
                        }
                    </Carousel>
                </ConfigProvider>
            </div>
        </div>
    )
}