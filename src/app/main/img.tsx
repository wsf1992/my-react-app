import Image from 'next/image'
import style from './menu.module.scss'

import topline from '@p/topline.png'
import bottomline from '@p/bottomline.png'
import middleline from '@p/middleline.png'

export function WorkBench({src}: {src: string}): JSX.Element {
    return <Image alt="" width={200} height={56} src={src} />
}

export function WorkBenchMicro({src}: {src: string}): JSX.Element {
    return <Image alt="" width={50} height={56} src={src} />
}

export function TopLine(): JSX.Element {
    return <Image alt="" width={22} height={36} src={topline} className={style.top_img}/>
}
export function BottomLine(): JSX.Element {
    return <Image alt="" width={22} height={22} src={bottomline} className={style.bottom_img}/>
}
export function MiddleLine(): JSX.Element {
    return <Image alt="" width={22} height={46} src={middleline} className={style.middle_img}/>

}
