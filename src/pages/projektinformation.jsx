import React from 'react';
import "../styles/bodystyle.css"; // Importera CSS-fil

const Projektinformation = () => {
    return (
        <div>
            <div id="main-content">
                <main>
                    <section id="Projektinformation" className="centered-section">
                        <h2>Projektinformation</h2>
                        <form className="form-container">
                            <div className="form-group">
                                <label htmlFor="Avser"><i className="fas fa-tasks"></i> Uppdraget Avser:</label>
                                <input type="text" id="Avser" name="Avser" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Leverans"><i className="fas fa-truck"></i> Leverans av:</label>
                                <input type="text" id="Leverans" name="Leverans" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Uppdragsnummer"><i className="fas fa-hashtag"></i> Uppdragsnummer:</label>
                                <input type="number" id="Uppdragsnummer" name="Uppdragsnummer" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Beställare"><i className="fas fa-user-tie"></i> Beställare:</label>
                                <input type="text" id="Beställare" name="Beställare" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Kontaktperson"><i className="fas fa-address-book"></i> Kontaktperson Beställare:</label>
                                <input type="text" id="Kontaktperson" name="Kontaktperson" />
                            </div>
                        </form>
                        <div className="button-container">
                            <a href="/roller_timpris" className="orange-button" style={{ textDecorationLine: 'none' }}><i className="fas fa-arrow-right"></i> Vidare</a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Projektinformation;