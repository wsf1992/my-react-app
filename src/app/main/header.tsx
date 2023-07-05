'use client'

import '@/style/style.css'
import style from './main.module.scss'
import Image from 'next/image'
import pickImg from '@p/pickup-menu.png'
import openImg from '@p/open-menu.png'
import User from './user'
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
            className={`flex flex-x-s-between flex-nowrap flex-x-s-between ${style.header_box_div}`}
            style={{ paddingRight: '35px' }}
        >
            <div className="flex flex-nowrap flex-auto">
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
            <User />
        </div>
    )
}

export default Header
