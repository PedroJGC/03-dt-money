import { createContext, useEffect, useState, type ReactNode } from "react"
import { api } from "../lib/axios"

interface Transaction {
  id: number
  description: string
  type: "income" | "outcome"
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  // const [allTransactions, setAllTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    // if (!query) {
    //   const response = await fetch("/transactions")
    //   const data = await response.json()

    //   setAllTransactions(data)
    //   setTransactions(data)
    //   return
    // }
    // const filteredTransactions = allTransactions.filter((transaction) => {
    //   const searchTerm = query.toLowerCase()

    //   return (
    //     transaction.description.toLowerCase().includes(searchTerm) ||
    //     transaction.category.toLowerCase().includes(searchTerm)
    //   )
    // })

    // setTransactions(filteredTransactions)

    const response = await api.get("transactions", {
      params: {
        q: query,
      },
    })
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
