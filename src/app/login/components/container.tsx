import Image from 'next/image'
import style from './container.module.scss'
import Form from './form'
import { getHttp } from '@/http/index'


export default async function LogoBox() {
        const res = await getHttp('/logo')
        const logo = `data:image/jpg;base64,${res.data?.enterprise_logo}`
        const language = `data:image/jpg;base64,${res.data?.enterprise_language}`
    return (
        <div className={`bg-fff relative ${style.div}`}>
            <Image src={logo} alt="" className={style.img} width={148} height={148}/>
            <div className="flex">
                <Image src="/login-left.png" alt="" className={style.limg} width={449} height={366}/>
                <Form enterprise_language={language}></Form>
            </div>
        </div>
    )
}
