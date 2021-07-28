import React from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom';

function ShowQrcode() {

    let value = localStorage.getItem("qr-link")
    const onImageDownload = () => {
        const svg = document.getElementById("QRCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = "QRCode";
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };

    return (
        <>
            <div className="backBtn">
                <Link to="/">
                    <i class="fas fa-arrow-alt-circle-left"></i>Back
                </Link>
            </div>
            <div className="QRContainer">

                <div>
                    <QRCode
                        id="QRCode"
                        bgColor="#ffffff"
                        level="H"
                        value={value}
                    />
                </div>
            </div>
            <div className="DownloadBtn">
                <button onClick={onImageDownload}>Download QR Code</button>
            </div>
        </>
    )
}

export default ShowQrcode
