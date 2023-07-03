import Image from 'next/image'
import { headers } from 'next/headers'
import style from '../login.module.scss'
import Form from './form'
import { getHttp } from '@/http/serverapi'

const leftImg = '/login-left.png'
export default async function LogoBox() {
    const headersList = headers()
    const host = headersList.get('Host')
    const res = await getHttp('/logo', {
        headers: {
            Referer: host
        }
    })
    const logo = `data:image/jpg;base64,${res.data?.enterprise_logo}`
    const language = `data:image/jpg;base64,${res.data?.enterprise_language}`
    return (
        <div className={`bg-fff relative ${style.container_div}`}>
            <Image
                src={logo}
                alt=""
                className={style.container_img}
                width={148}
                height={148}
            />
            <div className="flex">
                <Image
                    src={leftImg}
                    alt=""
                    className={style.container_limg}
                    width={449}
                    height={366}
                    priority
                />
                <Form enterprise_language={language}></Form>
            </div>
        </div>
    )
}
