'use client'

import Image from 'next/image'
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
            {leftIcon ? (
                <Image
                    src={leftIcon}
                    alt=""
                    className={style.icon}
                    width={18}
                    height={22}
                />
            ) : null}

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
                <Image
                    src="/delete.png"
                    alt=""
                    onClick={() => onChange('')}
                    width={20}
                    height={20}
                />
            ) : null}

            {password &&
                (isPassword ? (
                    <Image
                        alt=""
                        className={style.eye}
                        src="/eye.png"
                        onClick={() => setIsPassword(false)}
                        width={26}
                        height={22}
                    />
                ) : (
                    <Image
                        alt=""
                        className={style.eye}
                        src="/eys_see.png"
                        onClick={() => setIsPassword(true)}
                        width={26}
                        height={22}
                    />
                ))}
            {children}
        </div>
    )
}
