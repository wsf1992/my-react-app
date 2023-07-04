import Image from 'next/image'
import { getHttp } from '@/http/serverapi'
import { headers } from 'next/headers'

export default async function WorkBench(): Promise<JSX.Element> {
    const headersList = headers()
    const host = headersList.get('Host')
    const res = await getHttp('/logo', {
        headers: {
            Referer: host
        }
    })
    const workbench_config = `data:image/jpg;base64,${res.data?.workbench_config}`
    return <Image alt="" width={200} height={56} src={workbench_config} />
}
