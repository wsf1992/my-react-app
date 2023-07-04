'use client'

import '@/style/style.css'
import style from './main.module.scss'
import Image from 'next/image'
import pickImg from '@p/pickup-menu.png'
import openImg from '@p/open-menu.png'
import { useCollapse, useCollapseSet } from './collapseProvider'

function Header() {
    const isCollapse = useCollapse()
    const setCollapse = useCollapseSet()

    let iconUrl = pickImg
    if (isCollapse) {
        iconUrl = openImg
    }
    return (
        <div
            className={`flex flex-x-s-between flex-nowrap ${style.header_box_div}`}
        >
            <div className="flex flex-nowrap">
                <Image
                    src={iconUrl}
                    alt=""
                    onClick={() => {
                        if (setCollapse) {
                            setCollapse(!isCollapse)
                        }
                    }}
                    className={style.header_menu_img}
                    width={20}
                    height={18}
                />
                <p className={style.header_epname_p}>13123213</p>
            </div>
        </div>
    )
}

export default Header
