import Image from 'next/image'

export function WorkBench({src}: {src: string}): JSX.Element {
    return <Image alt="" width={200} height={56} src={src} />
}

export function WorkBenchMicro({src}: {src: string}): JSX.Element {
    return <Image alt="" width={50} height={56} src={src} />
}
