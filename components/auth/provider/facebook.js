import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import facebook from './../../../public/facebook.png'

function FacebookProvider ({children, ...props}){
    return (
        <ProviderButton>
            <Image 
            src={facebook} 
            alt="facebook logo"
            layout="fixed"
            width={20}
            height={20}
            quality={50}
            />
            {children}
        </ProviderButton>
    )
}

export default FacebookProvider