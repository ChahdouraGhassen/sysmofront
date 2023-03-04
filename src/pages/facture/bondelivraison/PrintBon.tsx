import React, { FC, useEffect, useState } from 'react'
import './Print.css';
import { useLocation } from 'react-router-dom';

const PrintBon: FC = () => {
    const location = useLocation()
    const [rep, setRep] = useState([])
    useEffect(() => {
        const printTimeout = setTimeout(() => {
            window.print();
        }, 300); // 30 seconds in milliseconds

        return () => {
            clearTimeout(printTimeout);
        };
    }, []);
    useEffect(() => {
        fetch('https://localhost:44339/api/reparation')
            .then(response => response.json())
            .then(data => {
                setRep(data);
            });
    }, []);
    return (
        <body>
            <h1 style={{ paddingTop: '60px', textIndent: '0pt', textAlign: 'center' }}>Bon De livraison</h1>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <h2 style={{ marginTop: '-3pt', paddingLeft: '15pt', textIndent: '0pt', textAlign: 'left' }}>N° BON De Livraison<span className="p"> :
                BL03/2023</span></h2>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <p style={{ paddingLeft: '15pt', textIndent: '0pt', textAlign: 'left' }}>Date : <span className="s1">{location.state.Datee}</span></p>
            <table style={{ borderCollapse: 'collapse', marginTop: '-75pt' }} align="right">
                <tr style={{ height: '22pt' }}>
                    <td
                        style={{ width: '206pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s2" style={{ paddingTop: '5pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Client :{location.state.Client}</p>
                    </td>
                </tr>
                <tr style={{ height: '18pt' }}>
                    <td
                        style={{ width: '206pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                    </td>
                </tr>
                <tr style={{ height: '19pt' }}>
                    <td
                        style={{ width: '206pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s2" style={{ paddingTop: '4pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Adresse :
                        </p>
                    </td>
                </tr>
                <tr style={{ height: '17pt' }}>
                    <td
                        style={{ width: '206pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s2" style={{ paddingTop: '3pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Tel (+216)
                        </p>
                    </td>
                </tr>
                <tr style={{ height: '17pt' }}>
                    <td
                        style={{ width: '206pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s2" style={{ paddingTop: '3pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Mat Fisc :
                        </p>
                    </td>
                </tr>
            </table>
            <div style={{ width: '900px', display: 'flex', paddingTop: '40pt', paddingLeft: '17pt' }}>
                <p className="s1" style={{ width: '300px' }}>
                    Matricule :{location.state.Matricule}
                </p>
                <p className="s1" style={{ width: '300px' }}>Marque :</p>
                <p className="s1" style={{ width: '300px' }}>Num° série :</p>
            </div>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <p className="s1" style={{ width: '300px', paddingLeft: '17pt' }}>KM Sortie :</p>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <div style={{ border: '1px solid black', height: '440px' }}>
                <table width={'100%'}>
                    <thead >
                        <tr style={{ height: '16pt', textAlign: "center" }}>
                            <th
                                style={{ width: '80pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                                <p className="s4"
                                    style={{ paddingTop: '3pt', paddingLeft: '39pt', paddingRight: '37pt', textIndent: '0pt', textAlign: 'center' }}>
                                    Ref</p>
                            </th>
                            <th
                                style={{ width: '275pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                                <p className="s4"
                                    style={{ paddingTop: '2pt', paddingLeft: '117pt', paddingRight: '117pt', textIndent: '0pt', textAlign: 'center' }}>
                                    Designation</p>
                            </th>
                            <th
                                style={{ width: '34pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                                <p className="s4" style={{ paddingTop: "3pt", paddingRight: "8pt", textIndent: "0pt", textAlign: "right" }}>Qte</p>
                            </th>
                            <th
                                style={{ width: '9.7%', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                                <p className="s4"
                                    style={{ paddingTop: '3pt', paddingLeft: '7pt', paddingRight: '5pt', textIndent: '0pt', textAlign: 'center' }}>
                                    PU HT</p>
                            </th>
                            <th
                                style={{ width: '13%', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                                <p className="s4"
                                    style={{ paddingTop: '3pt', paddingLeft: '4pt', paddingRight: '1pt', textIndent: '0pt', textAlign: 'center' }}>
                                    TOTAL HT</p>
                            </th>
                            <th
                                style={{ width: '31pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                                <p className="s4"
                                    style={{ paddingTop: '3pt', paddingLeft: '3pt', paddingRight: '2pt', textIndent: '0pt', textAlign: 'center' }}>
                                    TVA%</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {rep.map(livs =>
                            <tr key={livs.ReparationID}>
                                <td>Refe</td>
                                <td>{livs.Datee}</td>
                                <td>{livs.Client}</td>
                                <td>{livs.Matricule}</td>
                                <td>{livs.prixt + "TND"}</td>
                                <td>0.00%</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <table style={{ borderCollapse: 'collapse', borderSpacing: '0' }} align="right">
                <tr style={{ height: '16pt' }}>
                    <td
                        style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                        <p className="s6" style={{ paddingTop: '3pt', paddingRight: '7pt', textIndent: '0pt', textAlign: 'right' }}>Brut HT :
                        </p>
                    </td>
                    <td
                        style={{ width: '38pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'right' }}>{location.state.prix}</p>
                    </td>
                    <td
                        style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingLeft: '4pt', textIndent: '0pt', textAlign: 'left' }}>FODEC :</p>
                    </td>
                    <td
                        style={{ width: '66pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '2pt', paddingLeft: '17pt', textIndent: '0pt', textAlign: 'left' }}>0,000</p>
                    </td>
                </tr>
                <tr style={{ height: '16pt' }}>
                    <td
                        style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingRight: '8pt', textIndent: '0pt', textAlign: 'right' }}>Remise:
                        </p>
                    </td>
                    <td
                        style={{ width: '38pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingRight: '5pt', textIndent: '0pt', textAlign: 'right' }}>0,000</p>
                    </td>
                    <td
                        style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>TVA :</p>
                    </td>
                    <td
                        style={{ width: '66pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '2pt', paddingLeft: '17pt', textIndent: '0pt', textAlign: 'left' }}>0,000</p>
                    </td>
                </tr>
                <tr style={{ height: '16pt' }}>
                    <td
                        style={{ width: '50pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingRight: '8pt', textIndent: '0pt', textAlign: 'right' }}>Net HT:
                        </p>
                    </td>
                    <td
                        style={{ width: '38pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'right' }}>72,000</p>
                    </td>
                    <td
                        style={{ width: '52pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '3pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>Timbre :</p>
                    </td>
                    <td
                        style={{ width: '66pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}>
                        <p className="s5" style={{ paddingTop: '2pt', paddingLeft: '17pt', textIndent: '0pt', textAlign: 'left' }}>0,000</p>
                    </td>
                </tr>
                <tr style={{ height: '16pt' }}>
                    <td style={{ width: '88pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}
                        colSpan={2}>
                        <p className="s5" style={{ paddingTop: '2pt', paddingLeft: '20pt', textIndent: '0pt', textAlign: 'left' }}>NET.PAYER :
                        </p>
                    </td>
                    <td style={{ width: '118pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderLeftStyle: 'solid', borderLeftWidth: '2pt', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderRightStyle: 'solid', borderRightWidth: '2pt' }}
                        colSpan={2}>
                        <p className="s5" style={{ paddingTop: '2pt', paddingLeft: '23pt', textIndent: '0pt', textAlign: 'left' }}>73,000 TND
                        </p>
                    </td>
                </tr>
            </table>
            <p style={{ textIndent: '0pt', textAlign: 'left' }} />
            <p style={{ textIndent: '0pt', textAlign: 'left' }} />

            <p className="s7" style={{ paddingTop: '22pt', paddingLeft: '100pt', textIndent: '0pt', textAlign: 'left' }}>Arrêté La présente
                Facture à La somme De :</p>
            <p style={{ paddingTop: '130pt', textIndent: '0pt', textAlign: 'center' }}>NOUS VOUS REMERCIONS DE VOTRE
                CONFIANCE</p>
        </body>
    )
}

export default PrintBon;