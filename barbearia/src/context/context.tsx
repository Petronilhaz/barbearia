import { createContext, PropsWithChildren, useState } from "react"

interface Customer {
    name: string,
    tel: string,
    haircuts: string,
}

interface CustomerContextProps {
    customers: Customer[],
    addCustomer: (newCustomer: Customer) => void
}

const initialValues = {
    customers: [],
    addCustomer: () => {}
}

const CustomerContext = createContext<CustomerContextProps>(initialValues)

const CustomerProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {

    const [customers, setCustomers] = useState<Customer[]>([])

    const addCustomer = (newCustomer: Customer) => {
        setCustomers((prevCustomers)=> [...prevCustomers, newCustomer])
    }

    const ContextValue = {
        customers,
        addCustomer
    }

    return(
        <CustomerContext.Provider value={ContextValue}>
            {children}
        </CustomerContext.Provider>
    )
}

export { CustomerContext, CustomerProvider }