import React, {useState} from "react";
import Header from "./Header"
import Footer from "./Footer"
import words from '../words';

import '../App.css'

const Layout = (Component) => {
    const [showPrice,setShowPrice] = useState(false)
    return(
    <>
        <div className="texture">
            <img className="noise" src={process.env.PUBLIC_URL + `/img/noise_texture.png`}/>
            <img className="paper" src={process.env.PUBLIC_URL + `/img/paper_texture.png`}/>
        </div>
        {showPrice &&
            <div className="price">
                <div className="overlay">
                    <div className="popup">
                        <div className="img-wrapper">
                            <img className="w-100pc" src={process.env.PUBLIC_URL + `/img/PriceTable.png`}/>
                        </div>
                    </div>
                    <a className="close" onClick={() => setShowPrice(false)}>&times;</a>
                </div>
            </div>
        }
        <Header />
            <a className="price-icon" onClick={() => setShowPrice(true)}>
                <img src={process.env.PUBLIC_URL + `/img/icon/search.png`}/>
                {/* <div className="text">{words.terms.price.title}</div>    */}
            </a>
            <Component />
        <Footer />
    </>
  )
}

export default Layout