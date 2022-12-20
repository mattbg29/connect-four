import { signUp, signIn, signOut } from './SignUp';

export default function Test() {

    
    async function signInNow() {
        signIn('mattbg29@gmail.com', '!@12QWqw')
    }
    return (
        <div>   
                    <button onClick={() => signInNow()}>click</button>
        </div>
      );    
}


