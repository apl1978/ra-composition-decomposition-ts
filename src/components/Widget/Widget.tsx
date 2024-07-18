import { ReactNode } from 'react'

type TProps = {
    title: string,
    type: string,
    children: ReactNode
}

/**
 *
 *  Универсальный виджет
 */

export function Widget(props: TProps) {

    return (
        <div className="widget">
            <h2 className="title"><a href="#">{props.title}</a></h2>
            <div className={props.type}>
                {props.children}
            </div>
        </div>
    )
}
