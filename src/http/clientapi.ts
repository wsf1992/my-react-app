import  'client-only'

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
        nonce
    }
})  

function getHttp(url: string) {
  return instance.get(url)
}


export { getHttp }
