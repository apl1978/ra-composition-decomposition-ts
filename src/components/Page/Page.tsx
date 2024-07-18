import { news } from '../../data/data.tsx';
import { News } from '../News';
import { Search } from '../Search';
import { Advertising } from "../Advertising";
import { Widgets } from "../Widgets";

/**
 *
 * Главная страница
 */

export function Page() {

    return (
        <div className='page'>

            <div>
                <News news={news} />
            </div>

            <div>
                <Search />
            </div>

            <div>
                <Advertising />
            </div>

            <div>
                <Widgets />
            </div>
        </div>
    );
}
