import 'server-only'

import { randomString } from '@/util/global'
import sha256 from 'crypto-js/sha256'

const source = 'client.web'
const nonce = randomString(32)
const baseURL = 'https://env2cmb.emicloud.com:8443'

interface GetHttpParams {
    headers?: object
    next?: object
}

async function getHttp(url: string, params?: GetHttpParams) {
    const headers = params?.headers || {}

    const next = params?.next || {}

    const response = await fetch(`${baseURL}${url}`, {
        headers: {
            source,
            ...headers
        },
        ...next
    })
    return response.json()
}

async function getApi(url: string) {
    const response = await fetch(`${baseURL}${url}`, {
        headers: {
            source,
            nonce,
            token: 'e961327e19dd36f258894d13605f066aff4086d24bbf4c4d10759b83e1c69e3b'
        }
    })
    return response.json()
}

export { getHttp, getApi }
