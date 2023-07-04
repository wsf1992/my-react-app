import Image from 'next/image'
import { getHttp } from '@/http/serverapi'
import { headers } from 'next/headers'

export default async function WorkBenchMicro(): Promise<JSX.Element> {
    const headersList = headers()
    const host = headersList.get('Host')
    const res = await getHttp('/logo', {
        headers: {
            Referer: host
        }
    })
    const workbench_config_micro = `data:image/jpg;base64,${res.data?.workbench_config_micro}`
    return <Image alt="" width={50} height={56} src={workbench_config_micro} />
}
