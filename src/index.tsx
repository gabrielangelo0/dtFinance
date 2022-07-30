import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        // {
        //   id: 1,
        //   title: 'Freenclacer de website',
        //   type: 'deposit',
        //   category: 'Dev',
        //   amount: 6000,
        //   createdAt: new Date('2022-07-02 16:57:23'),
        // },
        // {
        //   id: 2,
        //   title: 'Aluguel',
        //   type: 'withdraw',
        //   category: 'Casa',
        //   amount: 1100,
        //   createdAt: new Date('2022-07-05 15:57:23'),
        // }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);