import { Auth } from 'aws-amplify';
import writeScore from './WriteScore';
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext({ name: '', auth: false, setName: () => {}})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', auth: true})

    async function login(username, password) {
        try {
            await Auth.signIn(username, password);
            console.log('login success')
            setUser(({
                ...user,
                name: username,
                auth: true,    
            }))
            //localStorage.setItem('curUser', user.attributes.email)
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    async function logout() {
        try {
            await Auth.signOut( {global: true });
            console.log("success")
            setUser(() => ({
                name: '',
                auth: false,
            }))
        } catch (error) {
            console.log('error signing out', error);
        }
            
    }

    return (
        <UserContext.Provider value = {{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}



export async function signUp(username, password) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            //    email,          // optional
            //    phone_number,   // optional - E.164 number convention
                // other custom attributes 
            //},
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
        writeScore(username, 0, 0)
    } catch (error) {
        console.log('error signing up:', error);
    }
}

//https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/#sign-out
