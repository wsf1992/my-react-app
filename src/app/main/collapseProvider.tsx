'use client'

import { createContext, useContext, useState } from 'react'

const CollapseContext = createContext<boolean|undefined>(undefined)

const CollapseSetContext = createContext<((val:boolean) => void)|undefined>(undefined)

export function CollapseProvider({ children }: { children: React.ReactNode }) {
    const [isCollapse, setIsCollapse] = useState(false)

    return (
        <CollapseContext.Provider value={isCollapse}>
            <CollapseSetContext.Provider value={setIsCollapse}>
                {children}
            </CollapseSetContext.Provider>
        </CollapseContext.Provider>
    )
}

export function useCollapse() {
    return useContext(CollapseContext)
}

export function useCollapseSet() {
    return useContext(CollapseSetContext)
}
