import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface DateFilterProps {
  onFilter: (startDate: string, endDate: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleFilterClick = () => {
    if (startDate && endDate) onFilter(startDate, endDate);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2, flexWrap: "wrap" }}>
      <TextField
        label="Start Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        sx={{ flexGrow: 1, minWidth: 150 }}
      />
      <TextField
        label="End Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        sx={{ flexGrow: 1, minWidth: 150 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleFilterClick}
        sx={{ flexGrow: 0 }}
      >
        Filter
      </Button>
    </Box>
  );
};

export default DateFilter;
