import firebase from './../firebase'

import NavBar from '../components/navbar'
import Brand from './../components/branding'
import Button from './../components/ui/button'
import GoogleProvider from '../components/auth/provider/google'

export default function Home() {
   console.log(firebase)
  return (
     <div>
       <NavBar/>
       <Brand title="Home Page" tagline="directory app start"/>
       <GoogleProvider>Sign in with Google</GoogleProvider>
       {/* <Button bgcolor="tomato" color="white">sign up with firebase</Button> */}
     </div>
    
  )
}
