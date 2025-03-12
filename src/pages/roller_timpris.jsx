import React from 'react';
import "../styles/bodystyle.css"; // Importera CSS-fil

const RollerTimpris = () => {
    return (
        <div>
            <div id="main-content">
                <main>
                    <section id="RollerTimpris" className="centered-section">
                        <h2>Roller och Timpris Tabell</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th><i className="fas fa-user-tag"></i> Roll</th>
                                    <th><i className="fas fa-dollar-sign"></i> Timpris</th>
                                    <th><i className="fas fa-info-circle"></i> Namn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="select-roll-timpris"></td>
                                    <td><input type="number" className="timpris-namn-input" defaultValue="500" step="50" /></td>
                                    <td><input type="text" className="timpris-namn-input" defaultValue="Namn 1" /></td>
                                </tr>
                                <tr>
                                    <td className="select-roll-timpris"></td>
                                    <td><input type="number" className="timpris-namn-input" defaultValue="500" step="50" /></td>
                                    <td><input type="text" className="timpris-namn-input" defaultValue="Namn 2" /></td>
                                </tr>
                                <tr>
                                    <td className="select-roll-timpris"></td>
                                    <td><input type="number" className="timpris-namn-input" defaultValue="500" step="50" /></td>
                                    <td><input type="text" className="timpris-namn-input" defaultValue="Namn 3" /></td>
                                </tr>
                                <tr>
                                    <td className="select-roll-timpris"></td>
                                    <td><input type="number" className="timpris-namn-input" defaultValue="500" step="50" /></td>
                                    <td><input type="text" className="timpris-namn-input" defaultValue="Namn 4" /></td>
                                </tr>
                                <tr>
                                    <td className="select-roll-timpris"></td>
                                    <td><input type="number" className="timpris-namn-input" defaultValue="500" step="50" /></td>
                                    <td><input type="text" className="timpris-namn-input" defaultValue="Namn 5" /></td>
                                </tr>
                                <tr>
                                    <td className="select-roll-timpris"></td>
                                    <td><input type="number" className="timpris-namn-input" defaultValue="500" step="50" /></td>
                                    <td><input type="text" className="timpris-namn-input" defaultValue="Namn 6" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="button-container">
                            <a href="/utrakning" className="orange-button" style={{ textDecorationLine: 'none' }}><i className="fas fa-arrow-right"></i> Vidare</a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default RollerTimpris;