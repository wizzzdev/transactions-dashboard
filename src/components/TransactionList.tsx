import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Typography } from "@mui/material";
import { Transaction } from "../api/mockApi";

interface TransactionListProps {
  transactions: Transaction[];
}

const ITEMS_PER_PAGE = 5;

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTransactions = transactions.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount (USD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTransactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.description}</TableCell>
                <TableCell align="right">${txn.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
      />
    </Paper>
  );
};

export default TransactionList;
