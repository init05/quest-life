'use client'

import React from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
      </LocalizationProvider>
  )
}
export default Providers;