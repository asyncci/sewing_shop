import Button from "../components/button";



export default function MainDescription() {
  return (
    <div id='top'>
      <div id='card'>
        <h1>
          Швейное производство полного цикла по пошиву детской и подростковой одежды оптом в Кыргызстане
        </h1>
        <div id='description'>
          <div id='detail'>
            <div>
              <h2>20000+</h2>
              <h4>единиц одежды в месяц</h4>
            </div>
            <div>
              <h2>50000+</h2>
              <h4>единиц в неделю</h4>
            </div>
          </div>
          <Button text={"Оформить заказ"} />
        </div>
      </div>
    </div>
  )
}