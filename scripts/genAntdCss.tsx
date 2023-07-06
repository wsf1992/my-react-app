import { extractStyle } from '@ant-design/static-style-extract'
import { ConfigProvider } from 'antd'

import React from 'react'
import fs from 'fs'

const outputPath = './public/antd.min.css'

const css = extractStyle((node: any) => (
    <>
        <ConfigProvider theme={{ token: {} }}>{node}</ConfigProvider>
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
            {node}
        </ConfigProvider>
    </>
))

fs.writeFileSync(outputPath, css)
