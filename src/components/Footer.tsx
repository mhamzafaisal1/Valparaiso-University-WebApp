import Link from 'next/link';
import Head from 'next/head';

const Footer = () => (
    <div className="footer">
    <footer className="footer">
    <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2><a href="https://www.valpo.edu/" className="test">Valparaiso University</a></h2>
                    <h5>Valparaiso, IN 46383-6493 USA</h5>
                    <b><a href="tel:219-464-5000" className="test">219-464-5000</a></b>
                </div>  {/* end of col-md 6 */}

                <div className="col-md-6 text-md-right">
                    <div className="social-media">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/valparaisou/?hl=en" target="_blank">
                            <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/valparaisou" target="_blank">
                            <i className="fab fa-facebook-square fa-2x"></i>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://twitter.com/valpou" target="_blank">
                            <i className="fab fa-twitter-square fa-2x"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/valpo" target="_blank">
                            <i className="fab fa-youtube-square fa-2x"></i>
                            </a>
                        </li>
                        </ul>
                       <p>Valparaiso University &copy; {new Date().getFullYear()}</p>  
                    </div>  {/* end of social-media */}

                </div> {/* end of col-md-right */}
            </div>  {/* end of row */}
        </div>  {/* container */}
    </footer>
</div> 
    
  );

  export default Footer;