import Image from 'next/image'
import { getHttp } from '@/http/index'
import style from './qrcode.module.scss'


export default async function WechatQrCode(){
        const res = await getHttp('/wechat_QR_code')
        const src = `data:image/jpeg;base64,${res?.data?.qr_code}`
    return <Image src={src} alt="" className={style.img} width={160} height={160}/>
}
