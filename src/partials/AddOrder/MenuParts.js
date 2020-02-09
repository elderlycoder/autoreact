import React, {Component} from "react";
import './menu-parts.css';

class MenuParts extends Component {

  sendPart = (event) => {
    this.props.selectPart(event.target.textContent)
  }
  render(){
    return (
      <div className="col-lg-3">
        <div id="popup-part" className="menu-parts">
          <div>
            <h4>Меню с деталями</h4>
          </div>
          <div className="row-part">
            <ul className="pmenuu">
              <li className="select-part" onClick={this.sendPart}>Новая запчасть</li>
              <li className="select-grup">Подвеска
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Амортизатор</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Амортизаторы комплект</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Балка задняя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Болт развала задних колёс</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Втулка стабилизатора</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Опора шаровая</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Подшипник опоры</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Пружина</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Рычаг</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Стойка стабилизатора</span></li>
                     </ul>
                  </li>
                  <li className="select-grup">Рулевое управление
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Бачок гидроусилителя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вал рулевого механизма</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Кардан рулевой</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Крестовина рулевого кардана</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Крышка бачка г/у</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Масло в ГУР</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Наконечник рулевой</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Насос гидроусилителя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Пыльник рулевой рейки</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Ремкомплект насоса ГУР</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Ремкомплект рулевой рейки</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Радиатор гидроусилителя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Рейка рулевая</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>С/блок рулевой рейки</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Трубка гидроусилителя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Тяга рулевая</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Шланг гидроусилителя</span></li>
                     </ul>
                  </li>
                  <li className="select-grup">Тормозная система
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Барабан тормозной</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Бачок тормозного цилиндра</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик износа колодок</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Диск тормозной</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Диски тормозные к-кт</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Комплект установочный задних колодок</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Колодки (барабанные)</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Колодки (дисковые)</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Колодки ручного тормоза</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Крышка бачка тормозной жидкости</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Направляющая суппорта</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Направляющие суппорта к-кт</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Планка регулировочная</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Поршень суппорта</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Пыльник направляющей суппорта</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Пыльник суппорта</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Р/к суппорта</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Скоба суппорта</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Суппорт тормозной</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Трос стояночного тормоза</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Трубка тормозная</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Шланг тормозной</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Штуцер томозной трубки</span></li>
                     </ul>
                  </li>
                  <li className="select-grup">Трансмиссия
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Бачок главного цилиндра сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Болт шруса</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вал карданный</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вал раздатки</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вал привода</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вал привода промежуточный</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вилка включения передачи</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вилка сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Гайка ступицы</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Гайка ШРУСа</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Диск сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Комплект сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Корзина сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Крестовина карданного вала</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Крышка ступицы</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Кулиса КПП</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Подшипник выжимной</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Подшипник ступицы</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Подшипник подвесной</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Привод в сборе</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Пыльник ШРУСа</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Р/к цилиндра сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Радиатор АКПП</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Сальник ступицы</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Ступица</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Трос КПП</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Трос сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Трос спидометра</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Фильтр АКПП</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Цилиндр сцепления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>ШРУС</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Шпилька колеса</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Щуп масляный</span></li>
                     </ul>
                  </li>
                  <li className="select-grup">Датчики
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Датчик ABS</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик абсолютного давления</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик давления в шине</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик давления масла</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик давления топлива</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик детонации</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик дождя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик импульсов</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик кислородный / лямбда-зонд</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик положения коленвала</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик положения распредвала</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик спидометра</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик температуры</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик температуры воздуха</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик уровня в бачок омывателя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик уровня масла</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик уровня топлива</span></li>
                     </ul>
                  </li>
                  <li className="select-grup">Электрика
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Аккумулятор</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Активатор замка</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Вентилятор радиатора</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Выключатель концевой</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Генератор</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик вентилятора</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Датчик включения заднего хода</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Замок зажигания</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Катушка зажигания</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Контактная группа замка зажигания</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Моторчик вентилятора</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Моторчик корректора фар</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Моторчик отопителя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Моторчик стеклоочистителя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Моторчик стеклоподъёмника</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Насос омывателя</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Насос омывателя фар</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Насос топливный</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Переключатель подрулевой</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Плата фонаря</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Предохранитель</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Стартер</span></li>
                     </ul>
                  </li>
                  <li className="select-grup">Лампы
                     <ul className="psubmenuu">
                        <li className="select-part"><span onClick={this.sendPart}>Лампа ближнего света</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа дальнего света</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа ближнего/дальнего</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа в габариты</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа в поворотник</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа в ПТФ</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа боковой указатель поворота</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа стоп-сигнал</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа в третий стоп-сигнал</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа в задний фонарь</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа фонарь заднего хода</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа панель приборов</span></li>
                        <li className="select-part"><span onClick={this.sendPart}>Лампа подсветки салона</span></li>
                     </ul>
                  </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
}

export default MenuParts;
