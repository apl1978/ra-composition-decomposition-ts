import { NewsItem } from '../NewsItem';
import { TNews } from "../../types";

/**
 *  Список новостей
 */

export function News({ news }: { news: TNews[] }) {

    return (
        <div className='news_block'>
            <a href="#">Сейчас в СМИ </a>
            <a href="#">В Германии </a>
            <a href="#">Рекомендуем </a>
            <ul>
                {news.map((item, index) => <NewsItem key={index} item={item}/>)}
            </ul>
        </div>
    );
}
