import style from './copyright.module.scss'


function CopyRight() {
    const year = new Date().getFullYear()
    return (
        <div className={style.div}>
            Copyright © 2018-{year} EMI. ALL rights reserved
            <a href="https://www.emicnet.com/" target="_blank" className={style.a}>
                {' '}
                南京易米云通网络科技有限公司{' '}
            </a>
            版权所有
            <a href="https://beian.miit.gov.cn/" target="_blank" className={style.a}>
                {' '}
                苏ICP备14035390号-4
            </a>
        </div>
    )
}

export default CopyRight
