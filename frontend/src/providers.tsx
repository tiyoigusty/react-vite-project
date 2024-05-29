import { TransactionProvider } from "./context/transaction";

export function Providers({children} : {children: React.ReactNode}) {
    return (
        <TransactionProvider>
            {children}
        </TransactionProvider>
    )
}