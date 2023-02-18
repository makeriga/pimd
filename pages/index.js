import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>De-mine UA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Low-cost metal detection solution for UA's mined land" />
        <p className="col description">
          A metal detector but for a of the price.
        </p>
        <div class="col col-12 sketchfab-embed-wrapper">
          <iframe title="Walkman WM-F35 SONY" frameborder="0" allowfullscreen mozallowfullscreen="true"
            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
            style={{width:"calc(50vw)", height:"calc(50vh)" }}
            xr-spatial-tracking execution-while-out-of-viewport
            execution-while-not-rendered web-share src="https://sketchfab.com/models/5d8f30c391874f20a22f070720ef3c3c/embed"> </iframe>
        
        </div>
        <div className="col">
          <Header title="Why?"></Header>
          <p className="col description">
            A significant portion of the land in Ukraine is contaminated with landmines, which will require clearance.
          </p>
        </div>
        <div className="col">
          <img src="landmines_area.png" style={{ width: "calc(60vh)" }} />
        </div>
      </main>
    </div>
  )
}
