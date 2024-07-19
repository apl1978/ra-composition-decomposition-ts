import { categories } from '../../data/data.tsx';

/**
 *
 * компонент поиска
 */

export function Search() {

    return (
<>
        <ul className="category">
            {categories.map((item: string, i: number) => <li  key={i} className="title"><a href="#">{item}</a></li>)}
        </ul>

            <form className='search__form'>
                <div className="logo">ЯНДЕКС</div>
                <div className='search'>
                    <input placeholder='Найдется всё.'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Найти
                </button>
            </form>
</>
    );
}

