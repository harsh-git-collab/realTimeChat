import { auth, provider } from '../firebase-config.js'
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = (props) => {
    const setIsAuth = props.setIsAuth;
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
            console.log(result)
            setIsAuth(true)
        } catch(error) {
            console.error(error);
        }
    }

    return (
    <div>
        <p> Sign in with google to continue</p>
        <button onClick={signInWithGoogle}>Sign In </button>
        
    </div>
    )
}