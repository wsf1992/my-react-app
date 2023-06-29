import style from './page.module.scss'
import Qrcode from './components/qrcode'
import CopyRight from './components/copyright'
import FormBox from './components/formBox'



function Login() {
    return (
        <div className={`flex-column flex-y-stretch flex-auto ${style.div}`}>
            <Qrcode></Qrcode>
            <FormBox className="flex-auto flex-nowrap"></FormBox>
            <CopyRight></CopyRight> 
        </div>
    )
}

export default Login
