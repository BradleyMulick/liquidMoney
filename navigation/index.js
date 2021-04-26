import React from 'react'
import Routes from './Routes'

import { AuthProvider } from './AuthProvider'
import { FluidProvider } from './FluidProvider'
import { LogsProvider } from './LogsProvider'

const Providers = ({ isOn, setIsOn }) => {



    return (
        <AuthProvider>
            <FluidProvider>
                <LogsProvider>
                    <Routes setIsOn={setIsOn} isOn={isOn} />
                </LogsProvider>
            </FluidProvider>
        </AuthProvider>
    )
}

export default Providers