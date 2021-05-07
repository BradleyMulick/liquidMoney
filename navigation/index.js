import React from 'react'
import Routes from './Routes'

import { AuthProvider } from './AuthProvider'
import { FluidProvider } from './FluidProvider'
import { LogsProvider } from './LogsProvider'

const Providers = ({ isOn, setIsOn, convertOn, setConvertOn }) => {



    return (
        <AuthProvider>
            <FluidProvider>
                <LogsProvider>
                    <Routes setIsOn={setIsOn} isOn={isOn} convertOn={convertOn} setConvertOn={setConvertOn} />
                </LogsProvider>
            </FluidProvider>
        </AuthProvider>
    )
}

export default Providers