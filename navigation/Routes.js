import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from './AuthProvider';

const Routes = ({ setIsOn, isOn, convertOn, setConvertOn }) => {

    const { user, setUser } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
        console.log(isOn)
    }, [])

    if (initializing) return null

    return (
        <NavigationContainer>
            {user ? <AppStack setIsOn={setIsOn} isOn={isOn} convertOn={convertOn} setConvertOn={setConvertOn} /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes