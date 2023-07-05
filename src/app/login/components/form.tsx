'use client'

import Image from 'next/image'
import style from '../login.module.scss'
import { useState, useEffect, useDeferredValue } from 'react'
import Input from './input'
import Button from './button'
import Captcha from './captcha'
import { useRouter } from 'next/navigation'
import { login } from '@/http/clientapi'

interface IsProps {
    enterprise_language: string
}

export default function Form({ enterprise_language }: IsProps): JSX.Element {
    const router = useRouter()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [sessionId, setSessionId] = useState('')

    function inputhange(value: string, name: string): void {
        if (name === 'userName') setUserName(value)
        if (name === 'password') setPassword(value)
        if (name === 'code') setCode(value)
    }

    const isFill = userName && password && code ? true : false

    async function submit() {
        if (!isFill) return
        const result = await login({
            name: userName,
            password,
            verify_code: code,
            session_id: sessionId
        })
        if (result.data.code === 200) {
            sessionStorage.setItem('token', result.data.data.token)
            router.push('/main')
        }
    }

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === 'Enter') submit()
        }
        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [])

    useEffect(() => {
        sessionStorage.clear()
    },[])

    return (
        <div className={`flex-column ${style.form_div}`}>
            <Image
                src={enterprise_language}
                alt=""
                className={style.form_img}
                width={320}
                height={48}
            />
            <Input
                name="userName"
                className="mar-b-22"
                leftIcon="/user.png"
                placeholder="用户名"
                value={userName}
                onChange={value => inputhange(value, 'userName')}
            ></Input>
            <Input
                name="password"
                className="mar-b-22"
                leftIcon="/password.png"
                placeholder="密码"
                value={password}
                onChange={value => inputhange(value, 'password')}
                password
            ></Input>
            <Input
                name="code"
                leftIcon="/code.png"
                placeholder="验证码"
                value={code}
                onChange={value => inputhange(value, 'code')}
            >
                <Captcha
                    className="mar-l-10"
                    getSessionId={setSessionId}
                ></Captcha>
            </Input>
            <Button
                width="400px"
                className="mar-t-50"
                disabled={!isFill}
                onClick={submit}
            >
                登录
            </Button>
        </div>
    )
}
