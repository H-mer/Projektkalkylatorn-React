import React from 'react';
import "../styles/bodystyle.css"; // Importera CSS-fil

const IndexPage = () => {
    return (
        <div>
            <div id="main-content">
                <main>
                    <section className="centered-section">
                        <h1>Välkommen till Projektkalkylatorn</h1>
                        <p>Effektivt verktyg för att hantera och beräkna projektkostnader.</p>
                        <div className="button-container">
                            <button className="orange-button"><i className="fas fa-sign-in-alt"></i> Logga in</button>
                            <button id="new-project-btn" className="orange-button"><i className="fas fa-folder-plus"></i> Nytt projekt</button>
                        </div>
                    </section>
                    <section className="centered-section">
                        <h2>Funktioner</h2>
                        <h3>Projektinformation</h3>
                        <p>Hantera all din projektinformation på ett ställe.</p>

                        <h3>Roller och Timpris</h3>
                        <p>Definiera roller och deras timpris för bättre kostnadskontroll.</p>

                        <h3>Uträkning</h3>
                        <p>Gör exakta uträkningar för att hålla ditt projekt inom budget.</p>

                        <div className="video-container">
                            <video controls>
                                Din webbläsare stödjer inte videouppspelning.
                            </video>
                        </div>
                        <p>Videon ovan och länken nedan är endast för att följa uppgiften och kommer plockas bort sedan!</p>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Besök Google</a>
                    </section>
                </main>
            </div>

            <div id="project-modal" className="modal">
                <div className="modal-content">
                    <span className="close-btn">&times;</span>
                    <h2>Ange projektnamn</h2>
                    <input type="text" id="project-name-input" placeholder="Projektnamn" />
                    <button id="save-project-btn">Spara</button>
                </div>
            </div>

        </div>
    );
};

export default IndexPage;




