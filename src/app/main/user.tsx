import { DownOutlined, UserOutlined, ImportOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import { useRouter } from 'next/navigation'

const items = [
    {
        key: '1',
        label: '个人资料',
        icon: <UserOutlined />
    },
    {
        key: '2',
        label: '退出',
        icon: <ImportOutlined rotate={180} />
    }
]

export default function User() {
    const router = useRouter()

    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key === '2') {
            window.location.href = '/login'
            router.push('/login')
        }
    }
    return (
        <Dropdown menu={{ items, onClick }}>
            <Space align="center">
                <p>wsfuser</p>
                <DownOutlined />
            </Space>
        </Dropdown>
    )
}
