import Image from 'next/image'
import { getHttp } from '@/http/serverapi'
import style from './qrcode.module.scss'

export default async function WechatQrCode() {
    const res = await getHttp('/wechat_QR_code', {
        next: { cache: 'no-store' }
    })
    const src = `data:image/jpeg;base64,${res?.data?.qr_code}`
    return (
        <Image
            src={src}
            alt=""
            className={style.img}
            width={160}
            height={160}
        />
    )
}
