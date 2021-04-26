import React, { createContext, useState, useEffect } from 'react'
export const LogsContext = createContext()
import { useStateWithCallbackLazy } from 'use-state-with-callback';


export const LogsProvider = ({ children }) => {

    const [dailyTotal, setDailyTotal] = useState('')
    const [allLogs, setAllLogs] = useStateWithCallbackLazy([])

    return (
        <LogsContext.Provider
            value={[
                dailyTotal,
                setDailyTotal,
                allLogs,
                setAllLogs,
            ]}
        >
            {children}
        </LogsContext.Provider >
    )
}