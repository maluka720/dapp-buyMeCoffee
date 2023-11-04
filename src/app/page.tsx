"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

export default function Home() {
  const collectWallet = () => {
    console.log("please collect to wallet!!!");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button variant="contained" onClick={collectWallet}>
          collect to wallet
        </Button>
      </main>
    </React.Fragment>
  );
}
