import React from 'react'
import { Link } from 'react-router-dom';

function Inputurl() {

    const handleChange = (e) => {
        localStorage.setItem("qr-link", JSON.stringify(e.target.value));
    }

    return (
        <div className="InputUrl">

            <div className="icon">

                <Link to="qr-code">
                    <i class="fas fa-location-arrow"> </i>
                    QR Code
                </Link>
            </div>
            <h3>Input Url....!</h3>
            <input onChange={handleChange} type="text">
            </input>
            <Link to="qr-code">
                <button>
                    Submit
                </button>
            </Link>
        </div>
    )
}

export default Inputurl
