import React, {useState } from 'react';
import DatePicker from "react-datepicker";

export default function DatePicker({ selectedDate, onDateChange }) {
  return <input type="date" value={selectedDate} onChange={onDateChange} />;
}
