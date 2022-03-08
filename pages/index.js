import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Russia Invaded Ukraine!</title>
        <link rel="icon" href="/flag.jpg" />
      </Head>

      <main >
      <section name="header">
        <h1 className="title">
          
          See What's happening in
          <a href="https://war.ukraine.ua/"> Ukraine WAR</a>
                   
        </h1>
        <div >
         <img className='background' src='https://war.ukraine.ua/wp-content/uploads/2022/03/pic.jpg'/>
        </div>
        <p className="description">
          This website have the scope to inform about <b>Ukraine New's</b> and NOT by the Desinformation Services from Russian Federation.
          <br></br>
          You will find here all official links, <b>THAT YOU CAN TRUST</b> and not being desinformed by Putin information SUPPRESSION!
          <br></br>
          <a href="https://war.ukraine.ua/why-is-russia-invading-ukraine/"> <b> WHY ALL THIS INVASION?</b></a>
          
        </p>
      
        
      </section>
      
       <section name="body">
        <div className="grid">
          <a href="https://war.ukraine.ua/support-ukraine/" className="card">
            <h3>Support Ukraine &rarr;</h3>
            <p>If you wish to make some Donations, you can find all what's needed at current time by Ukraine in diferent forms:

            </p>
            <li>Donate to Defenders</li>
            <li>Humanitarian Aid</li>
            <li>Host Ukranian refugees</li>
            <li>Others...</li>
            
          </a>

          <a href="https://war.ukraine.ua/donate/" className="card">
            <h3>Donate to Ukraine's Defenders &rarr;</h3>
            <p>Donate to the Armed Forces of Ukraine and the Ministry of Defence of Ukraine!</p>
            <li>Bank Transfer</li>
            <li>Crypto Payments Wallets</li>
            <li>Others...</li>
          </a>

          <a
            href="https://fightforua.org/"
            className="card"
          >
            <h3>Join The Foreign Legion &rarr;</h3>
            <p>Anyone who wants to join the defense of security in Europe and the world can come and stand side by side with the Ukrainians against the invaders of the 21st century.</p>
          </a>
          <a
            href="https://help.unhcr.org/ukraine/"
            className="card"
          >
            <h3>UNHCR ukraine Donations <icon>hearth</icon> &rarr;</h3>
            <p>
            This website provides relevant information for asylum seekers and refugees.
              
            </p>
            {//<img src='https://help.unhcr.org/ukraine/wp-content/uploads/sites/36/2022/03/Are-you-refugee-from-Ukraine-1-768x768.png'/>
            }
          </a>

        
          <a
            href="https://war.ukraine.ua/photos/"
            className="card"
          >
            <h3>All Photos from Ukraine <icon>hearth</icon> &rarr;</h3>
            <p>
              All SAD but True Photo's about what's happening in Ukraine right now! 
            </p>
          </a>
         
        </div> 
        </section>
      </main>

      <footer>
        <a
          href="https://war.ukraine.ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/flag.jpg" alt="Ukraine" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .background {
          width:100%;
          height:100%;
          position:flex;
          background: url('https://war.ukraine.ua/wp-content/uploads/2022/03/pic.jpg') no-repeat;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
