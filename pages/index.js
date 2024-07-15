import React, { useEffect } from "react";

import Head from 'next/head'
import UserManual from "./user-manual.svg";

export default function Home() {

  useEffect(() =>
  {
    document.documentElement.setAttribute("data-bs-theme", "dark");
      document.body.classList.add("min-vh-100");
  });

  return (
    <div className='container-fluid'>
      <Head>
        <title>De-mine UA</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="row justify-content-center m-3">
        <UserManual />
      </main>
    </div>
  )
}
