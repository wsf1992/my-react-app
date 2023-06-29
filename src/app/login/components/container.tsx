import Image from 'next/image'
import { headers } from 'next/headers'
import style from './container.module.scss'
import Form from './form'
import { getHttp } from '@/http/serverapi'

export default async function LogoBox() {
    const headersList = headers()
    const referer = headersList.get('Referer')
    const res = await getHttp('/logo', {
        headers: {
            Referer: referer
        }
    })
    const logo = `data:image/jpg;base64,${res.data?.enterprise_logo}`
    const language = `data:image/jpg;base64,${res.data?.enterprise_language}`
    return (
        <div className={`bg-fff relative ${style.div}`}>
            <Image
                src={logo}
                alt=""
                className={style.img}
                width={148}
                height={148}
            />
            <div className="flex">
                <Image
                    src="/login-left.png"
                    alt=""
                    className={style.limg}
                    width={449}
                    height={366}
                />
                <Form enterprise_language={language}></Form>
            </div>
        </div>
    )
}
