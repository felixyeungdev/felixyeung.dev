import Footer from "@components/Footer";
import Nav from "@components/Nav";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <AnimateSharedLayout>
                    <Nav />
                    {children}
                    <Footer />
                </AnimateSharedLayout>
            </AnimatePresence>
        </>
    );
};

export default Layout;
