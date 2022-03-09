import Head from 'next/head'

export default function Home() {
  return (
    <div className="container background">
      <Head>
        <title>Russia Invaded Ukraine!</title>
        <link rel="icon" href="/flag.jpg" />
      </Head>

      <main>
        <h1 className="title">
          
          See what's happening! 
          <br>
          </br>
          <button >
            <span class="button-content">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="currentColor"></path></svg>
              <a href="https://war.ukraine.ua/why-is-russia-invading-ukraine/"> HELP UKRAINE</a>
            </span>
          </button>          
        </h1>
        <div >
         <img className='background' src='https://war.ukraine.ua/wp-content/uploads/2022/03/pic.jpg'/>
        </div>
        <p className="description">
          This website have the scope to inform about <b>Ukraine New's</b> 
          <br></br>
          You will find here all official links, <b>THAT YOU CAN TRUST</b>
          <br></br>
        <h1 className='title'>
         <a href="https://war.ukraine.ua/why-is-russia-invading-ukraine/"> WHY THIS INVASION?</a>
        </h1>
           
         
        </p>
    
        <div className="grid">
          <a href="https://war.ukraine.ua/support-ukraine/" className="card">
            <h3>Support Ukraine &rarr;</h3>
            <p>If you wish to make some Donations, you can find all what's needed at current time by Ukraine in diferent forms:
            <li>Donate to Defenders</li>
            <li>Humanitarian Aid</li>
            <li>Host Ukranian refugees</li>
            <li>Others...</li>
            </p>
            
            
          </a>

          <a href="https://war.ukraine.ua/donate/" className="card">
            <h3>Donate to Ukraine's Defenders &rarr;</h3>
            <p>Donate to the Armed Forces of Ukraine and the Ministry of Defence of Ukraine!
            
            <li>Bank Transfer</li>
            <li>Crypto Payments Wallets</li>
            <li>Others...</li>
            </p>
            
          </a>

          <a
            href="https://fightforua.org/"  className="card"
          >
            <h3>Join The Foreign Legion &rarr;</h3>
            <p>Anyone who wants to join the defense of security in Europe and the world can come and stand side by side with the Ukrainians against the invaders of the 21st century.</p>
          </a>
          <a
            href="https://help.unhcr.org/ukraine/" className="card"
          >
            <h3>UNHCR ukraine Donations  &rarr;</h3>
            <p>
            This website provides relevant information for asylum seekers and refugees.
              
            </p>
            
          </a>
          <a
            href="https://standwithukraine.live/peace-protests/"
            className="card"
          >
            <h3>Participate in <b>PEACE PROTESTS</b> &rarr;</h3>
            <p>
            Find your nearest demonstration and show your support.
              
            </p>
    
          </a>
          
          <a
            href="https://wehelpukraine.org/"
            className="card"
          >
            <h3>We Help Ukraine  <b>Platform</b> &rarr;</h3>
            <p>
            This platform was created for people that Need help.
            <br></br>
            Also for people that can help with hosting Refugees from ukraine
            <br></br>
            Or any other help that you can check here 
            </p>
    
          </a>

          <a
            href="https://war.ukraine.ua/photos/"
            className="card"
          >
            <h3>All Photos from Ukraine &rarr;</h3>
            <p>
              All <b>SAD</b> but True Photo's about what's happening in Ukraine right now! 
            </p>
          </a>
         
        </div> 
      
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
        .grid p li{
          padding:10px;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .background {
          font-size: 50px;
          font-family: inherit;
          font-weight: 700;
          padding: 10px;
          border-radius: 20px;
          border: none;
          color: black;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
          background: linear-gradient(0deg, rgba(255,213,0,1) 0%, rgba(255,213,0,1) 47%, rgba(0,91,187,1) 47%, rgba(0,91,187,1) 100%);
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
          color: Black;
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
          margin-top: 5rem;
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

        button {
          font-size: 50px;
          font-family: inherit;
          font-weight: 700;
          padding: 10px;
          border-radius: 20px;
          border: 2;
          border-color:black;
          color: black;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
          background: linear-gradient(0deg, rgba(255,213,0,1) 0%, rgba(255,213,0,1) 47%, rgba(0,91,187,1) 47%, rgba(0,91,187,1) 100%);
         }
         
         button .button-content {
          display: flex;
          align-items: center;
          background: white;
          padding: 0.7em 1.5em;
          padding-left: 1.2em;
          border-radius: 16px;
         }
         
         button svg {
          width: 30px;
          height: 50px;
          margin-right: 6px;
          color: #ff0000;
          transition: transform 0.3s;
         }
         
         button:hover svg {
          transform: scale(1.5);
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
