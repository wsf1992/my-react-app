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
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

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

function formatMenuData(
    data: MenuData[],
    isChildren: boolean = false
): MenuItem[] {
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

export default function MyMenu({
    workImg,
    workMicriImg
}: {
    workImg: React.ReactElement
    workMicriImg: React.ReactElement
}): JSX.Element {
    const [items, setItems] = useState<MenuItem[] | undefined>([])
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([''])
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const isCollapse = useCollapse()

    // function clickHandle(info): void {
    //     console.log(123, info);
    // }

    const onOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
        const latestOpenKey: string | undefined = keys.find(
            key => openKeys.indexOf(key) === -1
        )
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }

    async function getMenuList() {
        const res = await getHttp('/menu')
        const nItems = formatMenuData(res.data.data) as ItemType[]
        // setItems(nItems)
        nItems.forEach(item => {
            if (item.title === null) {
                item.title = undefined
            }
        })
        setItems(nItems as any)
    }
    useEffect(() => {
        getMenuList()
    }, [])

    return (
        <div
            className={`flex-column ${isCollapse && 'is-collapse'} ${
                style.menu_box_div
            }`}
        >
            {!isCollapse ? workImg : workMicriImg}
            <div className="menu-content">
                <Menu
                    inlineIndent={30}
                    className="define-menu"
                    triggerSubMenuAction="click"
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={isCollapse}
                    items={items}
                    openKeys={openKeys}
                    // onClick={clickHandle}
                    onOpenChange={onOpenChange}
                    style={{
                        color: '#3110eb',
                        background: '#dd113d'
                    }}
                />
            </div>
        </div>
    )
}
