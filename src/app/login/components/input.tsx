'use client'

import { useState } from 'react'
import style from './input.module.scss'
import { Input } from 'antd'


interface IsProps {
    name?: string
    leftIcon?: string
    password?: boolean
    className?: string
    placeholder?: string
    value: string
    children?: React.ReactElement
    onChange: (val: string) => void
}

export default function UserInput({
    name,
    leftIcon,
    password,
    className,
    placeholder,
    value,
    children,
    onChange
}: IsProps): JSX.Element {
    const [isPassword, setIsPassword] = useState(true)

    return (
        <div className={`flex flex-y-center ${className} ${style.div}`}>
            {leftIcon ? <img src={leftIcon} className={style.icon} /> : null}

            <Input
                placeholder={placeholder}
                bordered={false}
                size="large"
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                type={isPassword && password ? 'password' : 'text'}
            />

            {value !== '' ? (
                <img src="/delete.png" onClick={() => onChange('')} className={style.del} />
            ) : null}

            {password &&
                (isPassword ? (
                    <img
                        className={style.eye}
                        src="/eye.png"
                        onClick={() => setIsPassword(false)}
                     />
                ) : (
                    <img
                    className={style.eye}
                        src="/eys_see.png"
                        onClick={() => setIsPassword(true)}
                    />
                ))}
            {children}
        </div>
    )
}
