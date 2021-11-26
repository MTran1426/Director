// Third Pary Modules

//  Nextjs/Framework Modules

// Custom Components
import NavBar from '../components/navbar'
import Brand from '../components/branding'
import GoogleProvider from '../components/auth/provider/google'
import GithubProvider from '../components/auth/provider/github'
import FacebookProvider from '../components/auth/provider/facebook'
import AppleProvider from '../components/auth/provider/apple'

export default function Home() {
   
  return (
     <div>
       <NavBar/>
       <Brand title="ToDo Calender Planning App" tagline="login to firebase"/>
       <GoogleProvider>Sign in with Google</GoogleProvider>
       <GithubProvider>Sign in with Github</GithubProvider>
       <FacebookProvider>Sign in with Facebook</FacebookProvider>
       <AppleProvider>Sign in with Apple</AppleProvider>
     </div>
    
   
    
  )
}
