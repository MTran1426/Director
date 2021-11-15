import {ButtonBase} from "./styles"

function Button ({children, bgcolor, ...props}){
    
    return (
        <ButtonBase bgcolor={bgcolor}>
            {children}
        </ButtonBase>
    )
}

export default Button