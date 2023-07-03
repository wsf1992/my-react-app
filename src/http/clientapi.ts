import 'client-only'

import axios from 'axios'
import { randomString } from '@/util/global'
import sha256 from 'crypto-js/sha256'

const source = 'client.web'
const nonce = randomString(32)
const baseURL = 'https://env2cmb.emicloud.com:8443'

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        source,
        nonce,
        // token: sessionStorage.getItem('token')
    }
})

function getHttp(url: string) {
    return instance.get(url)
}

interface LoginApiParams {
    name: string
    password: string
    session_id: string
    verify_code: string
}
function login({ name, password, session_id, verify_code }: LoginApiParams) {
    const authType = 'signature'
    const timestamp = Math.ceil(new Date().getTime() / 1000).toString()
    const username = name + '@' + window.location.hostname
    const signatureKey = sha256(sha256(password).toString()).toString()
    const str = `auth-type=${authType}&nonce=${nonce}&session_id=${session_id}&source=${source}&timestamp=${timestamp}&username=${username}&verify_code=${verify_code}&signatureKey=${signatureKey}`
    const signature = sha256(str).toString().toUpperCase()

    return axios({
        url: `${baseURL}/user/token`,
        method: 'POST',
        headers: {
            source,
            nonce,
            'auth-type': authType,
            timestamp,
            username,
            signature
        },
        data: { session_id, verify_code }
    })
}

export { getHttp, login }
