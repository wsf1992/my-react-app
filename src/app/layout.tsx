import './globals.css'
import '../../public/antd.min.css' // 添加这行
import './position.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '呼叫中心管理系统',
    description: ''
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex`}>{children}</body>
        </html>
    )
}
