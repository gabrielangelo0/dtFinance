import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global';
import { TransactionTable } from './components/TransactionsTable';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionModal () {
        setIsNewTransactionsModalOpen(true);
    }
    function handleCloseNewTransactionModal () {
        setIsNewTransactionsModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNeewTransactionModal={ handleOpenNewTransactionModal } />

      <Dashboard />

      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose={ handleCloseNewTransactionModal } 
      />

      <TransactionTable />

     <GlobalStyle />
    </TransactionsProvider>
  );
}
