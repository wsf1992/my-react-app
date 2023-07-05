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
        <>
            <button
                className={`pointer ${props.className} ${
                    props.disabled && 'disabled'
                } ${style.button}`}
                style={{
                    width: props.width ? props.width : '100%'
                }}
                disabled={props.disabled}
                onClick={() => props.onClick()}
            >
                {props.children ? props.children : '按钮'}
            </button>

            <ConfigProvider
            theme={{
                components: {
                  Button: {
                    colorBgContainer: '#229dff',
                    colorBgContainerDisabled: '#a0cfff',
                    // colorPrimaryBgHover: '#a0cfff',
                    // colorBgTextHover: '#a0cfff',
                    // colorText: '#fff',
                    // colorTextDisabled: '#fff',
                    // colorPrimary: '#fff',
                    // colorPrimaryHover: '#fff',
                    // colorPrimaryActive: '#fff',
                    // colorPrimary: '#229dff',
                    borderRadius: 50,
                    fontSize: 20,
                    controlHeight: 50,
                    lineWidth: 0,
                    lineWidthFocus: 0,
                    controlOutlineWidth: 0,
                  },
                },
              }}
            >


            <Button
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
        </>
    )
}

