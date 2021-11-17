import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import github from './../../../public/github.png'

function GithubProvider ({children, ...props}){
    return (
        <ProviderButton>
            <Image 
            src={github} 
            alt="github logo"
            layout="fixed"
            width={20}
            height={20}
            quality={50}
            />
            {children}
        </ProviderButton>
    )
}

export default GithubProvider