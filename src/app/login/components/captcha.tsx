import style from './captcha.module.scss'
import Image from 'next/image'
import { getHttp } from '@/http/clientapi'
import { useState, useEffect } from 'react'

interface IsProps {
    className: string
    getSessionId: (val: string) => void
}

export default function Captcha({
    className,
    getSessionId
}: IsProps): JSX.Element {
    const [captcha, setCaptcha] = useState('')

    async function getCaptcha() {
        const res = await getHttp('/captcha')
        if (res.data?.data?.image) {
            setCaptcha(res.data?.data?.image)
            getSessionId(res.data?.data?.session_id)
        }
    }

    useEffect(() => {
        getCaptcha()
    }, [])

    return (
        <div className={`relative flex ${className}`}>
            <Image src={captcha} alt="" width={110} height={40} />

            <p className={`pointer ${style.p}`} onClick={getCaptcha}>
                换一张
            </p>
        </div>
    )
}
