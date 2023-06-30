import { CollapseProvider } from './collapseProvider'
import Menu from './menu'
import Header from './header'

export default function Layout({
    children
}: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <div className="flex flex-auto">
            <CollapseProvider>
                <Menu />
                <div className="flex-column flex-auto">
                    <Header />
                    {children}
                </div>
            </CollapseProvider>
        </div>
    )
}
