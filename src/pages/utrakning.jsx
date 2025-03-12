import React from 'react';
import "../styles/bodystyle.css"; // Importera CSS-fil

const Uträkning = () => {
    return (
        <div>
            <div id="main-content">
                <main>
                    <section id="Uträkning" className="centered-section">
                        <h2>Uträkning</h2>
                        <p>Fyll i tabellen för att på ett tydligt sätt sammanställa projektets alla kostnader.</p>
                    </section>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Akt</th>
                                    <th>Aktivitetsnamn</th>
                                    <th>Resurs/Roll</th>
                                    <th>Tid</th>
                                    <th>Timpris</th>
                                    <th>Arvode</th>
                                    <th>Utlägg</th>
                                    <th>Total kostnad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 1, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 1, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 2, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 2, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 3, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 3, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 4, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 4, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 5, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 5, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 6, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 6, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 7, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 7, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                                <tr>
                                    <td className="select-akt"></td>
                                    <td>Rad 8, Kolumn 2</td>
                                    <td className="select-roll"></td>
                                    <td>Rad 8, Kolumn 4</td>
                                    <td><input type="number" className="timpris-input" defaultValue="0" step="1" /></td>
                                    <td><input type="number" className="arvode-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="utlagg-input" defaultValue="0" step="500" /></td>
                                    <td><input type="number" className="total-kostnad-input" defaultValue="0" readOnly /></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Summa:</th>
                                    <th>
                                        <input type="number" id="markup" defaultValue="10" min="0" max="100" step="1" style={{ borderRadius: '5px', textAlign: 'right', direction: 'rtl' }} />
                                        <label htmlFor="markup">% Pålägg</label>
                                    </th>
                                    <th>Utlägg inkl pålägg:</th>
                                </tr>
                                <tr>
                                    <th>Totalt antal timmar:</th>
                                    <th></th>
                                    <th>Total kostnad:</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div id="Savendownload" className="centered-section">
                        <div className="button-container">
                            <button type="submit" className="orange-button"><i className="fas fa-save"></i> Spara</button>
                            <button type="button" className="orange-button"><i className="fas fa-download"></i> Ladda ner</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Uträkning;
