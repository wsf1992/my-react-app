'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { getHttp } from '@/http/clientapi'
import style from './menu.module.scss'
import { useCollapse } from './collapseProvider'

import topline from '@p/topline.png'
import bottomline from '@p/bottomline.png'
import middleline from '@p/middleline.png'

type MenuItem = Required<MenuProps>['items'][number]

interface IsState {
    items: MenuItem[]
    defaultSelectedKeys: string[]
    openKeys: string[]
}

interface MenuData {
    id: number
    children: any[]
    icon: string
    menu_name: string
}

function formatMenuData(data: MenuData[], isChildren = false): MenuItem[] {
    return data.map(
        ({ id: key, icon, children = [], menu_name: label }, index) => {
            let IconDom
            if (!isChildren) {
                IconDom = <i className={icon} />
            } else {
                if (data.length == 1) {
                    IconDom = (
                        <Image
                            src={topline}
                            alt=""
                            className={style.top_img}
                            width={22}
                            height={36}
                        />
                    )
                } else if (data.length > 1) {
                    if (index == 0) {
                        IconDom = (
                            <Image
                                alt=""
                                width={22}
                                height={36}
                                src={topline}
                                className={style.top_img}
                            />
                        )
                    } else if (index == data.length - 1) {
                        IconDom = (
                            <Image
                                alt=""
                                width={22}
                                height={22}
                                src={bottomline}
                                className={style.bottom_img}
                            />
                        )
                    } else {
                        IconDom = (
                            <Image
                                alt=""
                                width={22}
                                height={46}
                                src={middleline}
                                className={style.middle_img}
                            />
                        )
                    }
                }
            }
            return {
                key,
                icon: IconDom,
                children: children.length
                    ? formatMenuData(children, true)
                    : null,
                label
            }
        }
    )
}

export default function MyMenu(): JSX.Element {
    const [items, setItems] = useState([])
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([''])
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const isCollapse = useCollapse()
    // const hasMenu = items.length
    const hasMenu = true

    function clickHandle(key: string) {
        console.log(123, key)
    }

    const onOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
        const latestOpenKey: string | undefined = keys.find(
            key => openKeys.indexOf(key) === -1
        )
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }

    async function getMenuList() {
        const res = await getHttp('/menu')
        const nItems = formatMenuData(res.data.data)
        setItems(nItems)
    }
    useEffect(() => {
        getMenuList()
    }, [])

    return (
        <div
            className={`menu-box ${isCollapse && 'is-collapse'} ${
                style.menu_box_div
            }`}
        >
            <div className="menu-content flex-column ">
                <Image
                    alt=""
                    width={200}
                    height={56}
                    src="data:image/jpg;base64,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"
                />
                {hasMenu && (
                    <Menu
                        className="define-menu"
                        // defaultSelectedKeys={defaultSelectedKeys}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={isCollapse}
                        items={items}
                        openKeys={openKeys}
                        onClick={clickHandle}
                        onOpenChange={onOpenChange}
                    />
                )}
            </div>
        </div>
    )
}
