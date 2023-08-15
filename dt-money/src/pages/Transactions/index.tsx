import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  TransationsConatiner,
  PriceHighLight,
  TransationsTable,
} from './styles'
import { dateFormetter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransationsConatiner>
        <SearchForm />
        <TransationsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormetter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransationsTable>
      </TransationsConatiner>
    </div>
  )
}
