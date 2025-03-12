import React from 'react';
import "../styles/headerfooter.css"; // Importera CSS-fil

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Om Projektkalkylatorn</h4>
                    <p>Projektkalkylatorn är ett verktyg för att hantera och beräkna projektkostnader effektivt.</p>
                </div>
                <div className="footer-section">
                    <h4>Kontakt</h4>
                    <p>Email: helmer999@gmail.com</p>
                    <p>Telefon: +46 70 384 5410</p>
                    <p>Adress: Exempelgatan 1, 123 45 Stockholm, Sverige</p>
                </div>
                <div className="footer-section">
                    <h4>Snabblänkar</h4>
                    <ul>
                        <li><a href="/">Hem</a></li>
                        <li><a href="/projektinformation">Projektinformation</a></li>
                        <li><a href="/roller_timpris">Roller/Timpris</a></li>
                        <li><a href="/utrakning">Uträkning</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Projektkalkylatorn. Alla rättigheter förbehållna.</p>
            </div>
        </footer>
    );
};

export default Footer;