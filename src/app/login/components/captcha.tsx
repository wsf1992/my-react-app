import style from './captcha.module.scss'
import Image from 'next/image'
import { getHttp } from '@/http/serverapi'
// import { useState, useEffect } from 'react'

interface IsProps {
    className: string
    getSessionId: (val: string) => void
}

export default async function Captcha({
    className,
    getSessionId
}: IsProps): Promise<JSX.Element> {
    // const [captcha, setCaptcha] = useState('')

    const captcha = ''
    // async function getCaptcha() {
    // const res = await getHttp('/captcha')
    // const captcha = res.data?.data?.image
    // if (res.data?.data?.image) {
    //     // setCaptcha(res.data?.data?.image)
    //     // getSessionId(res.data?.data?.session_id)
    // }
    // }

    // useEffect(() => {
    //     getCaptcha()
    // }, [])

    return (
        <div className={`relative flex ${className}`}>
            <Image src={captcha} alt="" width={110} height={40} />

            <p className={`pointer ${style.p}`}>换一张</p>
        </div>
    )
}
