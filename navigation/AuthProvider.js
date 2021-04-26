import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext()




export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                        console.log({ user })

                    } catch (e) {
                        console.log(e)
                    }
                },
                register: async (email, password, user, fullName) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)

                        firestore()
                            .collection('Users')
                            .add({
                                userId: email,
                                name: fullName,

                            })
                            .then(() => {
                                console.log('New User added!');
                            });
                    } catch (e) {
                        console.log(e)
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (e) {
                        console.log(e)
                    }
                }
            }}

        >
            { children}
        </AuthContext.Provider >
    )
}