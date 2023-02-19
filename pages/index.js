import React, { useEffect } from "react";

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
        <div className="col col-12 sketchfab-embed-wrapper row mb-5">
          <div className="col">
            <iframe src="https://gmail1120944.autodesk360.com/shares/public/SH35dfcQT936092f0e433ebaff7df10d3a04?mode=embed" width="800" height="700" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
          </div>
          <div className='col-5'>
            <Header title="We are liberating Ukraine from LANDMINES!" />
            <p>Our pulse induction metal detector saves lives by assisting in the demining operations</p>
            <p className="col description">
              <ul>
                <li>Lightweight, foldable design</li>
                <li>Acceptable performance in most scenarios</li>
                <li>Innovative printed circuit search head</li>
                <li>Easy to scale and produce</li>
                <li>Current BoM cost 23€/pc @ QTY 500</li>
                <li>Experienced team – knows how to ship</li>
              </ul>
            </p>
          </div>
        </div>  
      </main>
    </div>
  )
}
