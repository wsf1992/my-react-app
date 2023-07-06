'use client'

import style from '../login.module.scss'
import { Button, ConfigProvider } from 'antd'
interface IsProps {
    width?: string
    className?: string
    children?: string
    disabled?: boolean
    loading?: boolean
    onClick: () => void
}
export default function MyButton(props: IsProps) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorTextLightSolid: '#fff',
                        colorTextDisabled: '#fff',
                        colorPrimary: '#229dff',
                        colorPrimaryHover: '#66b1ff',
                        colorPrimaryActive: '#66b1ff',
                        colorBgContainerDisabled: '#a0cfff',
                        borderRadius: 50,
                        fontSize: 20,
                        controlHeight: 50
                    }
                }
            }}
        >
            <Button
                type="primary"
                className={`pointer ${props.className}`}
                style={{
                    width: props.width ? props.width : '100%'
                }}
                disabled={props.disabled}
                loading={props.loading}
                onClick={() => props.onClick()}
            >
                {props.children ? props.children : '按钮'}
            </Button>
        </ConfigProvider>
    )
}
