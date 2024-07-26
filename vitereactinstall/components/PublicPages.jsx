import { Header } from "./header/header"
import { FacingLastInvoices } from "./facingLastInvoices/facingLastInvoices"
import { FacingLastClients } from "./facingLastClients/facingLastClients"
import { FacingLastCompanies } from "./facingLastCompanies/facingLastCompanies"
import { WorkBetter } from "./workBetter/workBetter"
import { useEffect, useState } from "react"
import { FullInvoices } from "./fullInvoices/fullInvoices"
import { FullCompanies } from "./fullCompanies/fullCompanies"
import { FullClients } from "./fullClients/fullClients"

export const PublicPages = () => {
    const [pathname, setPathname] = useState("")

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location]);

    return (
        <>
        <Header />
        {(pathname === "/" || pathname === "/home" || pathname === "") && 
            <>
                <FacingLastInvoices />
                <FacingLastClients />
                <FacingLastCompanies />
                <WorkBetter />
            </>}

        {pathname.includes("invoices") && <FullInvoices />}
        {pathname.includes("contacts") && <FullClients />}
        {pathname.includes("companies") && <FullCompanies />}
        </>
    )
}