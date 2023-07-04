import { CollapseProvider } from './collapseProvider'
import Menu from './menu'
import Header from './header'
import { WorkBench, WorkBenchMicro } from './img'
import { headers } from 'next/headers'
import { getHttp } from '@/http/serverapi'

export default async function Layout({
    children
}: {
    children: React.ReactNode
}): Promise<JSX.Element> {
    const headersList = headers()
    const host = headersList.get('Host')
    const res = await getHttp('/logo', {
        headers: {
            Referer: host
        }
    })
    const workbench_config_micro = `data:image/jpg;base64,${res.data?.workbench_config_micro}`
    const workbench_config = `data:image/jpg;base64,${res.data?.workbench_config}`
    const bgColor = res.data?.menu_colour
    const color = res.data?.menu_text_default_colour
    const activeColor = res.data?.menu_text_colour

    return (
        <div className="flex flex-auto">
            <CollapseProvider>
                <Menu
                    workImg={<WorkBench src={workbench_config} />}
                    workMicriImg={
                        <WorkBenchMicro src={workbench_config_micro} />
                    }
                    bgColor={bgColor}
                    color={color}
                    activeColor={activeColor}
                />
                <div className="flex-column flex-auto">
                    <Header />
                    {children}
                </div>
            </CollapseProvider>
        </div>
    )
}
