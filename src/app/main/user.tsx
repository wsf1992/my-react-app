import { DownOutlined, UserOutlined, ImportOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

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
    return (
        <Dropdown menu={{ items }}>
            <Space align="center">
                <p>wsfuser</p>
                <DownOutlined />
            </Space>
        </Dropdown>
    )
}
