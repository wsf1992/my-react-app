'use client'

import { createContext, useContext, useState } from 'react'

const CollapseContext = createContext(null)

const CollapseSetContext = createContext(null)

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

export function useCollapse(): boolean {
    return useContext(CollapseContext)
}

export function useCollapseSet(): (val: boolean) => void {
    return useContext(CollapseSetContext)
}
