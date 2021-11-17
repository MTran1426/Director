import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import apple from './../../../public/apple.png'

function AppleProvider ({children, ...props}){
    return (
        <ProviderButton>
            <Image 
            src={apple} 
            alt="apple logo"
            layout="fixed"
            width={20}
            height={20}
            quality={50}
            />
            {children}
        </ProviderButton>
    )
}

export default AppleProvider