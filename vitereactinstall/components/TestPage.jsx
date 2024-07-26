import { Header } from "./header/header"
import { FacingLastInvoices } from "./facingLastInvoices/facingLastInvoices"
import { FacingLastClients } from "./facingLastClients/facingLastClients"
import { FacingLastCompanies } from "./facingLastCompanies/facingLastCompanies"
import { WorkBetter } from "./workBetter/workBetter"


export const TestPage = () => {
    return (
        <>
        <Header />
        <FacingLastInvoices />
        <FacingLastClients />
        <FacingLastCompanies />
        <WorkBetter />
        </>
    )
}