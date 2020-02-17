import React, { Component } from "react";
import "./menu-parts.css";
import { selectPart } from "../../redux/actions/add-order";
//import { connect } from "mongoose";
import { connect } from "react-redux";

class MenuParts extends Component {
  sendPart = event => this.props.sendPartProps(event.target);
  render() {
    return (
      <div className="col-lg-3">
        <div id="popup-part" className="menu-parts">
          <div>
            <h4>Меню с деталями</h4>
          </div>
          <div className="row-part">
            <ul className="pmenuu">
              <li id="100" className="select-part" onClick={this.sendPart}>
                Новая запчасть
              </li>
              <li className="select-grup">
                Подвеска
                <ul className="psubmenuu">
                  <li className="select-part">
                    <span id="a1" onClick={this.sendPart}>
                      Амортизатор
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a2" onClick={this.sendPart}>
                      Амортизаторы комплект
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a3" onClick={this.sendPart}>
                      Балка задняя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a4" onClick={this.sendPart}>
                      Болт развала задних колёс
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a5" onClick={this.sendPart}>
                      Втулка стабилизатора
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a6" onClick={this.sendPart}>
                      Опора шаровая
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a7" onClick={this.sendPart}>
                      Подшипник опоры
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a8" onClick={this.sendPart}>
                      Пружина
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a9" onClick={this.sendPart}>
                      Рычаг
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="a10" onClick={this.sendPart}>
                      Стойка стабилизатора
                    </span>
                  </li>
                </ul>
              </li>
              <li className="select-grup">
                Рулевое управление
                <ul className="psubmenuu">
                  <li className="select-part">
                    <span id="b1" onClick={this.sendPart}>
                      Бачок гидроусилителя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b2" onClick={this.sendPart}>
                      Вал рулевого механизма
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b3" onClick={this.sendPart}>
                      Кардан рулевой
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b4" onClick={this.sendPart}>
                      Крестовина рулевого кардана
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b5" onClick={this.sendPart}>
                      Крышка бачка г/у
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b6" onClick={this.sendPart}>
                      Масло в ГУР
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b7" onClick={this.sendPart}>
                      Наконечник рулевой
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b8" onClick={this.sendPart}>
                      Насос гидроусилителя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b9" onClick={this.sendPart}>
                      Пыльник рулевой рейки
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b10" onClick={this.sendPart}>
                      Ремкомплект насоса ГУР
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b11" onClick={this.sendPart}>
                      Ремкомплект рулевой рейки
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b12" onClick={this.sendPart}>
                      Радиатор гидроусилителя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b13" onClick={this.sendPart}>
                      Рейка рулевая
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b14" onClick={this.sendPart}>
                      С/блок рулевой рейки
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b15" onClick={this.sendPart}>
                      Трубка гидроусилителя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b16" onClick={this.sendPart}>
                      Тяга рулевая
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="b17" onClick={this.sendPart}>
                      Шланг гидроусилителя
                    </span>
                  </li>
                </ul>
              </li>
              <li className="select-grup">
                Тормозная система
                <ul className="psubmenuu">
                  <li className="select-part">
                    <span id="c1" onClick={this.sendPart}>
                      Барабан тормозной
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c2" onClick={this.sendPart}>
                      Бачок тормозного цилиндра
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c3" onClick={this.sendPart}>
                      Датчик износа колодок
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c4" onClick={this.sendPart}>
                      Диск тормозной
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c5" onClick={this.sendPart}>
                      Диски тормозные к-кт
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c6" onClick={this.sendPart}>
                      Комплект установочный задних колодок
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c7" onClick={this.sendPart}>
                      Колодки (барабанные)
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c8" onClick={this.sendPart}>
                      Колодки (дисковые)
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c9" onClick={this.sendPart}>
                      Колодки ручного тормоза
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c10" onClick={this.sendPart}>
                      Крышка бачка тормозной жидкости
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c11" onClick={this.sendPart}>
                      Направляющая суппорта
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c12" onClick={this.sendPart}>
                      Направляющие суппорта к-кт
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c13" onClick={this.sendPart}>
                      Планка регулировочная
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c14" onClick={this.sendPart}>
                      Поршень суппорта
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c15" onClick={this.sendPart}>
                      Пыльник направляющей суппорта
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c16" onClick={this.sendPart}>
                      Пыльник суппорта
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c17" onClick={this.sendPart}>
                      Р/к суппорта
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c18" onClick={this.sendPart}>
                      Скоба суппорта
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c19" onClick={this.sendPart}>
                      Суппорт тормозной
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c20" onClick={this.sendPart}>
                      Трос стояночного тормоза
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c21" onClick={this.sendPart}>
                      Трубка тормозная
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c22" onClick={this.sendPart}>
                      Шланг тормозной
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="c23" onClick={this.sendPart}>
                      Штуцер томозной трубки
                    </span>
                  </li>
                </ul>
              </li>
              <li className="select-grup">
                Трансмиссия
                <ul className="psubmenuu">
                  <li id="d1" className="select-part">
                    <span onClick={this.sendPart}>
                      Бачок главного цилиндра сцепления
                    </span>
                  </li>
                  <li id="d2" className="select-part">
                    <span onClick={this.sendPart}>Болт шруса</span>
                  </li>
                  <li id="d3" className="select-part">
                    <span onClick={this.sendPart}>Вал карданный</span>
                  </li>
                  <li id="d4" className="select-part">
                    <span onClick={this.sendPart}>Вал раздатки</span>
                  </li>
                  <li id="d5" className="select-part">
                    <span onClick={this.sendPart}>Вал привода</span>
                  </li>
                  <li id="d6" className="select-part">
                    <span onClick={this.sendPart}>
                      Вал привода промежуточный
                    </span>
                  </li>
                  <li id="d7" className="select-part">
                    <span onClick={this.sendPart}>
                      Вилка включения передачи
                    </span>
                  </li>
                  <li id="d8" className="select-part">
                    <span onClick={this.sendPart}>Вилка сцепления</span>
                  </li>
                  <li id="d9" className="select-part">
                    <span onClick={this.sendPart}>Гайка ступицы</span>
                  </li>
                  <li id="d10" className="select-part">
                    <span onClick={this.sendPart}>Гайка ШРУСа</span>
                  </li>
                  <li id="d11" className="select-part">
                    <span onClick={this.sendPart}>Диск сцепления</span>
                  </li>
                  <li id="d12" className="select-part">
                    <span onClick={this.sendPart}>Комплект сцепления</span>
                  </li>
                  <li id="d13" className="select-part">
                    <span onClick={this.sendPart}>Корзина сцепления</span>
                  </li>
                  <li id="d14" className="select-part">
                    <span onClick={this.sendPart}>
                      Крестовина карданного вала
                    </span>
                  </li>
                  <li id="d15" className="select-part">
                    <span onClick={this.sendPart}>Крышка ступицы</span>
                  </li>
                  <li id="d16" className="select-part">
                    <span onClick={this.sendPart}>Кулиса КПП</span>
                  </li>
                  <li id="d17" className="select-part">
                    <span onClick={this.sendPart}>Подшипник выжимной</span>
                  </li>
                  <li id="d18" className="select-part">
                    <span onClick={this.sendPart}>Подшипник ступицы</span>
                  </li>
                  <li id="d19" className="select-part">
                    <span onClick={this.sendPart}>Подшипник подвесной</span>
                  </li>
                  <li id="d20" className="select-part">
                    <span onClick={this.sendPart}>Привод в сборе</span>
                  </li>
                  <li id="d21" className="select-part">
                    <span onClick={this.sendPart}>Пыльник ШРУСа</span>
                  </li>
                  <li id="d22" className="select-part">
                    <span onClick={this.sendPart}>Р/к цилиндра сцепления</span>
                  </li>
                  <li id="d23" className="select-part">
                    <span onClick={this.sendPart}>Радиатор АКПП</span>
                  </li>
                  <li id="d24" className="select-part">
                    <span onClick={this.sendPart}>Сальник ступицы</span>
                  </li>
                  <li id="d25" className="select-part">
                    <span onClick={this.sendPart}>Ступица</span>
                  </li>
                  <li id="d26" className="select-part">
                    <span onClick={this.sendPart}>Трос КПП</span>
                  </li>
                  <li id="d27" className="select-part">
                    <span onClick={this.sendPart}>Трос сцепления</span>
                  </li>
                  <li id="d28" className="select-part">
                    <span onClick={this.sendPart}>Трос спидометра</span>
                  </li>
                  <li id="d29" className="select-part">
                    <span onClick={this.sendPart}>Фильтр АКПП</span>
                  </li>
                  <li id="d30" className="select-part">
                    <span onClick={this.sendPart}>Цилиндр сцепления</span>
                  </li>
                  <li id="d31" className="select-part">
                    <span onClick={this.sendPart}>ШРУС</span>
                  </li>
                  <li id="d32" className="select-part">
                    <span onClick={this.sendPart}>Шпилька колеса</span>
                  </li>
                  <li id="d33" className="select-part">
                    <span onClick={this.sendPart}>Щуп масляный</span>
                  </li>
                </ul>
              </li>
              <li className="select-grup">
                Датчики
                <ul className="psubmenuu">
                  <li className="select-part">
                    <span id="e1" onClick={this.sendPart}>
                      Датчик ABS
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e2" onClick={this.sendPart}>
                      Датчик абсолютного давления
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e3" onClick={this.sendPart}>
                      Датчик давления в шине
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e4" onClick={this.sendPart}>
                      Датчик давления масла
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e5" onClick={this.sendPart}>
                      Датчик давления топлива
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e6" onClick={this.sendPart}>
                      Датчик детонации
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e7" onClick={this.sendPart}>
                      Датчик дождя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e8" onClick={this.sendPart}>
                      Датчик импульсов
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e9" onClick={this.sendPart}>
                      Датчик кислородный / лямбда-зонд
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e10" onClick={this.sendPart}>
                      Датчик положения коленвала
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e11" onClick={this.sendPart}>
                      Датчик положения распредвала
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e12" onClick={this.sendPart}>
                      Датчик спидометра
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e13" onClick={this.sendPart}>
                      Датчик температуры
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e14" onClick={this.sendPart}>
                      Датчик температуры воздуха
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e15" onClick={this.sendPart}>
                      Датчик уровня в бачок омывателя
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e16" onClick={this.sendPart}>
                      Датчик уровня масла
                    </span>
                  </li>
                  <li className="select-part">
                    <span id="e17" onClick={this.sendPart}>
                      Датчик уровня топлива
                    </span>
                  </li>
                </ul>
              </li>
              <li className="select-grup">
                Электрика
                <ul className="psubmenuu">
                  <li className="select-part">
                    <span onClick={this.sendPart}>Аккумулятор</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Активатор замка</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Вентилятор радиатора</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Выключатель концевой</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Генератор</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Датчик вентилятора</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Датчик включения заднего хода
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Замок зажигания</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Катушка зажигания</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Контактная группа замка зажигания
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Моторчик вентилятора</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Моторчик корректора фар</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Моторчик отопителя</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Моторчик стеклоочистителя
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Моторчик стеклоподъёмника
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Насос омывателя</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Насос омывателя фар</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Насос топливный</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Переключатель подрулевой
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Плата фонаря</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Предохранитель</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Стартер</span>
                  </li>
                </ul>
              </li>
              <li className="select-grup">
                Лампы
                <ul className="psubmenuu">
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа ближнего света</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа дальнего света</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа ближнего/дальнего</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа в габариты</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа в поворотник</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа в ПТФ</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Лампа боковой указатель поворота
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа стоп-сигнал</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Лампа в третий стоп-сигнал
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа в задний фонарь</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>
                      Лампа фонарь заднего хода
                    </span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа панель приборов</span>
                  </li>
                  <li className="select-part">
                    <span onClick={this.sendPart}>Лампа подсветки салона</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendPartProps: payload => {
      dispatch(selectPart(payload));
    }
  };
}

export default connect(null, mapDispatchToProps)(MenuParts);
