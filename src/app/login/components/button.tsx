'use client'

import style from './button.module.scss'

interface IsProps {
    width?: string
    className?: string
    children?: string
    disabled?: boolean
    onClick: () => void
}
function Button(props: IsProps) {
    return (
        <button
            className={`pointer ${props.className} ${
                props.disabled && 'disabled'
            } ${style.button}`}
            style={{
                width: props.width ? props.width : '100%'
            }}
            disabled={props.disabled}
            onClick={() => props.onClick()}
        >
            {props.children ? props.children : '按钮'}
        </button>
    )
}

export default Button
