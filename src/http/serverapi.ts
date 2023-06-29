import 'server-only'

import { randomString } from '@/util/global'
import sha256 from 'crypto-js/sha256'

const source = 'client.web'
const nonce = randomString(32)
const baseURL = 'https://env2cmb.emicloud.com:8443'

interface LoginApiParams {
    name: string
    password: string
    session_id: string
    verify_code: string
}

const loginApi = ({
    name,
    password,
    session_id,
    verify_code
}: LoginApiParams) => {
    const authType = 'signature'
    const timestamp = Math.ceil(new Date().getTime() / 1000)
    const username = name + '@' + window.location.hostname
    const signatureKey = sha256(sha256(password).toString()).toString()
    const str = `auth-type=${authType}&nonce=${nonce}&session_id=${session_id}&source=${source}&timestamp=${timestamp}&username=${username}&verify_code=${verify_code}&signatureKey=${signatureKey}`
    const signature = sha256(str).toString().toUpperCase()

    return fetch('https://env2cmb.emicloud.com:8443/user/token', {
        method: 'POST',
        headers: {
            source,
            nonce,
            'auth-type': authType,
            // timestamp,
            username,
            signature
        },
        body: JSON.stringify({ session_id, verify_code })
    })
}

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
        next: {
            ...next
        }
    })
    return response.json()
}

async function getApi(url: string) {
    const response = await fetch(`${baseURL}${url}`, {
        headers: {
            source,
            nonce,
            token: 'e56c73a54265bfe91fe18af5fec5862b0dac239f4408bf2ff40bd7049b59ede2'
        }
    })
    return response.json()
}

export { getHttp, getApi, loginApi }
