import { v4 as uuidv4 } from 'uuid';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

const transactions: Transaction[] = [
  { id: uuidv4(), date: "2024-11-01", description: "Groceries", amount: 50 },
  { id: uuidv4(), date: "2024-11-05", description: "Rent", amount: 1200 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
  { id: uuidv4(), date: "2024-11-10", description: "Utilities", amount: 150 },
  { id: uuidv4(), date: "2024-11-15", description: "Dinner", amount: 75 },
  { id: uuidv4(), date: "2024-11-18", description: "Subscription", amount: 15 },
];

export const fetchTransactions = (): Promise<Transaction[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(transactions)
    }, 1000);
  });
