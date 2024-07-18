import { Widget } from '../Widget';
import { visited, tvguide, online } from '../../data/data.tsx';

/**
 *
 *  Компонент с виджетами
 */

export function Widgets() {

    return (
        <div className="media">
            <Widget  title={'Погода'} type={'weather'}>
                <img src="https://imgholder.ru/100x100/8493a8/adb9ca&text=Погода&font=kelson" alt="weather"></img>
                <span>+17°</span>
                <div>
                    <div>Утром +17</div>
                    <div>днем +20</div>
                </div>
            </Widget>
            <Widget title={'Посещаемое'} type={'visited'}>
                {visited.map((item, index) => <div key={index}><span>{item.title}</span> - {item.description}</div>)}
            </Widget>
            <Widget title={'Карты Германии'}>
                <span>Расписание</span>
            </Widget>
            <Widget title={'Телепрограмма'} type={'tvguide'}>
                {tvguide.map((item, index) => <div key={index}><span>{item.time}</span>{item.name}</div>)}
            </Widget>
            <Widget title={'Эфир'} type={'online'}>
                {online.map((item, index) => <div key={index}>{item}</div>)}
            </Widget>
        </div>
    );
}
