import Head from "next/head";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { ReactNode } from "react";
import { homeProps } from "@/interfaces/interface";



const Layout = ({ metas, children }: { metas: homeProps, children: ReactNode }) => {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header Logo={metas.data.Logo} Menus={metas.data.Menus} />

                {children}

                <Footer />
            </main>
        </>
    )
}

export default Layout;