import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { fetchTransactions, Transaction } from "./api/mockApi";
import TransactionList from "./components/TransactionList";
import DateFilter from "./components/DateFilter";

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleFilter = (startDate: string, endDate: string) => {
    setFilteredTransactions(
      transactions.filter(
        (txn) => txn.date >= startDate && txn.date <= endDate
      )
    );
  };

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Container><Typography>Loading...</Typography></Container>;
  if (error) return <Container><Typography>Error: {error}</Typography></Container>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Payment Dashboard
      </Typography>
      <DateFilter onFilter={handleFilter} />
      <TransactionList transactions={filteredTransactions} />
    </Container>
  );
};

export default App;
