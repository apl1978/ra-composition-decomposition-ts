import { TNews } from "../../types";

/**
 *  Единичная новость
 */

export function NewsItem({ item }: { item: TNews } ) {

    return (
        <li className="news__item">
            <img src={item.img} alt="news"></img>
            <a href={item.link}>
                {item.title}
            </a>
        </li>
    );
}
