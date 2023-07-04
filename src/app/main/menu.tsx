'use client'

import { useState, useEffect } from 'react'
import { Menu, ConfigProvider } from 'antd'
import type { MenuProps } from 'antd'
import { getHttp } from '@/http/clientapi'
import style from './menu.module.scss'
import { useCollapse } from './collapseProvider'

import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

import { TopLine, BottomLine, MiddleLine } from './img'

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
                    IconDom = <TopLine />
                } else if (data.length > 1) {
                    if (index == 0) {
                        IconDom = <TopLine />
                    } else if (index == data.length - 1) {
                        IconDom = <BottomLine />
                    } else {
                        IconDom = <MiddleLine />
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
    workMicriImg,
    bgColor,
    color,
    activeColor
}: {
    workImg: React.ReactElement
    workMicriImg: React.ReactElement
    bgColor: string
    color: string
    activeColor: string
}): JSX.Element {
    const [items, setItems] = useState<MenuItem[] | undefined>([])
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const isCollapse = useCollapse()

    function clickHandle({ key }: {key: string}): void {
        setSelectedKeys([key])
    }

    const onOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
        const latestOpenKey: string | undefined = keys.find(
            key => openKeys.indexOf(key) === -1
        )
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }

    async function getMenuList() {
        const res = await getHttp('/menu')
        const nItems = formatMenuData(res.data.data) as ItemType[]
        nItems.forEach(item => {
            if (item.title === null) {
                item.title = undefined
            }
        })
        setSelectedKeys([nItems[0].key?.toString()] as any)
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
            <div className="menu-content" style={{ backgroundColor: bgColor }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                colorBgContainer: bgColor, // 背景颜色
                                colorBgElevated: bgColor, // 背景颜色
                                controlItemBgActive: bgColor, // 背景颜色
                                colorText: color, // 默认颜色
                                colorPrimary: activeColor // 选中颜色
                            }
                        }
                    }}
                >
                    <Menu
                        selectedKeys={selectedKeys}
                        className="define-menu"
                        triggerSubMenuAction="click"
                        mode="inline"
                        inlineCollapsed={isCollapse}
                        items={items}
                        openKeys={openKeys}
                        onClick={clickHandle}
                        onOpenChange={onOpenChange}
                    />
                </ConfigProvider>
            </div>
        </div>
    )
}
