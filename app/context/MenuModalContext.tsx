"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MenuModalContextValue {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const MenuModalContext = createContext<MenuModalContextValue | null>(null);

export function MenuModalProvider({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuModalContext.Provider
            value={{
                isMenuOpen,
                openMenu: () => setIsMenuOpen(true),
                closeMenu: () => setIsMenuOpen(false),
            }}
        >
            {children}
        </MenuModalContext.Provider>
    );
}

export function useMenuModal() {
    const ctx = useContext(MenuModalContext);
    if (!ctx) throw new Error("useMenuModal must be used inside MenuModalProvider");
    return ctx;
}
