import style from './login.module.scss'
import Qrcode from './components/qrcode'
import CopyRight from './components/copyright'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={`flex-column flex-y-stretch flex-auto ${style.layout_div}`}
        >
            <Qrcode></Qrcode>
            {children}
            <CopyRight></CopyRight>
        </div>
    )
}
