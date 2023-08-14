import { Header } from '../../components/Header';
import { Summary } from '../../components/summary';
import { SearchForm } from './components/SearchForm';
import { TransationsConatiner, PriceHighLight, TransationsTable } from './styles';

export function Transactions() {
    return (
        <div>
           <Header />
           <Summary />

           <TransationsConatiner> 
            <SearchForm />
            <TransationsTable>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <PriceHighLight variant='income'>R$ 12.000,00</PriceHighLight>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td>Hamburger</td>
                        <PriceHighLight variant='outcome'>- R$ 59,00</PriceHighLight>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                </tbody>
            </TransationsTable>
           </TransationsConatiner>
        </div>
    )
} 