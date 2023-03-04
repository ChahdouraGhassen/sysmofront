import { FC, useEffect, useState } from 'react';
import './InterventionPrint.css'
import { useLocation, useNavigate } from 'react-router-dom';

const InterventionPrint: FC = () => {
    const [width] = useState(641)
    const location = useLocation();
    const [reps, setReps] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        window.print();
        navigate("/GererReparation");
    }, []);
    useEffect(() => {
        if (window.innerWidth < width) {
            alert("Place your phone in landscape mode for the best experience")
        }
    }, [width])
    useEffect(() => {
        refreshList();
    }, []);
    const refreshList = () => {
        fetch('https://localhost:44339/api/reparation')
            .then(response => response.json())
            .then(data => {
                setReps(data);
            })
    }
    return (
        <>
            <div className='p-5' >
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.18 771.32">
                    <text className="cls-9" transform="translate(127.68 83.88)">FICHE D’INTERVENTION</text>
                    <text className="cls-10" transform="translate(414.16 381.85) scale(1.08 1.13)">N° MATRICULE</text>
                    <text className="cls-11" transform="translate(412.6 429.16)">Date Mise Service</text>
                    <rect className="cls-12" x="25.41" y="146.89" width="117.29" height="23.66" />
                    <rect className="cls-13" x="3.49" y="146.89" width="21.93" height="23.66" />
                    <rect className="cls-12" x="25.41" y="194.21" width="117.29" height="23.66" />
                    <rect className="cls-13" x="3.49" y="194.21" width="21.93" height="23.66" />
                    <text className="cls-14" >test</text>
                    <rect className="cls-12" x="25.41" y="170.55" width="117.29" height="23.66" />
                    <rect className="cls-13" x="3.49" y="170.55" width="21.93" height="23.66" />
                    <rect className="cls-12" x="25.41" y="217.87" width="117.29" height="23.66" />
                    <rect className="cls-13" x="3.49" y="217.87" width="21.93" height="23.66" />
                    <text className="cls-14" transform="translate(37.77 164.02) scale(1.08 1.13)">DIAGNOSTIC</text>
                    <text className="cls-14" transform="translate(34.71 188.02) scale(1.08 1.13)">
                        <tspan xmlSpace="preserve"> DEPANNAGE</tspan>
                    </text>
                    <text className="cls-14" transform="translate(35.03 211.02) scale(1.08 1.13)">
                        <tspan xmlSpace="preserve"> REPARATION</tspan>
                    </text>
                    <text className="cls-14" transform="translate(38.15 235.02) scale(1.08 1.13)">ENTRETEIN</text>
                    <text className="cls-10" transform="translate(376.61 280.5) scale(1.08 1.13)">VIDANGE</text>


                    <rect x="0.5" y="490.51" width="340" height="20" fill="#f0ad4e" />
                    <rect x="2" y="490.51" width="340" height="20" fill="#fff" stroke="#000" stroke-width="2" />
                    <text className="cls-16" transform="translate(14.81 499.02) scale(1.3 1.13)">RÉF</text>
                    <text className="cls-16" transform="translate(127.99 499.02) scale(1.3 1.13)">DÉSIGNATION</text>
                    <text className="cls-16" transform="translate(313.69 499.19) scale(1.3 1.13)">QTÉ </text>
                    <text className="cls-16" transform="translate(271.28 499.02) scale(1.3 1.13)">Unité</text>

                    {reps.map((rep, i) => (
                        <g key={rep.ReparationID}>
                            <rect x="50" y={150 + i * 30} width="500" height="30" fill={i % 2 === 0 ? "#f9f9f9" : "#fff"} />
                            <text className="cls-16" x="75" y={170 + i * 30} font-size="12">{rep.Datee}</text>
                            <text className="cls-16" x="200" y={170 + i * 30} font-size="12">{rep.TypeRepar}</text>
                            <text x="325" y={170 + i * 30} font-size="12">{rep.Client}</text>
                            <text x="400" y={170 + i * 30} font-size="12">{rep.Matricule}</text>
                            <text x="475" y={170 + i * 30} font-size="12">{rep.Chauffeur}</text>
                            <rect x="525" y={155 + i * 30} width="25" height="20" fill="#e60000" />
                            <rect x="555" y={155 + i * 30} width="25" height="20" fill="#007bff" />
                            <text x="535" y={170 + i * 30} font-size="12" fill="#fff">X</text>
                            <text x="565" y={170 + i * 30} font-size="12" fill="#fff">P</text>
                        </g>
                    ))}

                    {/*  <rect className="cls-13" x="0.5" y="520.98" width="39.96" height="15.24" />
                    <rect className="cls-15" x="40.46" y="520.98" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="520.98" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="520.98" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="536.21" width="39.96" height="15.24" />
                    <rect className="cls-13" x="40.46" y="536.21" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="536.21" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="536.21" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="551.45" width="39.96" height="15.24" />
                    <rect className="cls-15" x="40.46" y="551.45" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="551.45" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="551.45" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="566.68" width="39.96" height="15.24" />
                    <rect className="cls-13" x="40.46" y="566.68" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="566.68" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="566.68" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="581.92" width="39.96" height="15.24" />
                    <rect className="cls-15" x="40.46" y="581.92" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="581.92" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="581.92" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="597.16" width="39.96" height="15.24" />
                    <rect className="cls-13" x="40.46" y="597.16" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="597.16" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="597.16" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="612.39" width="39.96" height="15.24" />
                    <rect className="cls-13" x="40.46" y="612.39" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="612.39" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="612.39" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="627.63" width="39.96" height="15.24" />
                    <rect className="cls-13" x="40.46" y="627.63" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="627.63" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="627.63" width="51.8" height="15.24" />
                    <rect className="cls-13" x="0.5" y="642.86" width="39.96" height="15.24" />
                    <rect className="cls-13" x="40.46" y="642.86" width="219.49" height="15.24" />
                    <rect className="cls-13" x="259.95" y="642.86" width="35.17" height="15.24" />
                    <rect className="cls-13" x="295.12" y="642.86" width="51.8" height="15.24" /> */}
                    <text className="cls-17" transform="translate(320.11 704.62)">Signature et Cachet (Obligatoire)</text>
                    <text className="cls-18" transform="translate(5.52 679.38)">* Client : <tspan className="cls-19" x="54.32" y="0">(Nom,Prénom &amp; Qualité Du
                        Signature )</tspan></text>
                    <text className="cls-20" transform="translate(423.2 82.88) scale(1.08 1.13)">N° 100</text>
                    <text className="cls-21" transform="translate(2.9 102.9) scale(1.18 1.13)">Du : {location.state.Datee} </text>
                    <text className="cls-22" transform="translate(2.9 124.42) scale(1.18 1.13)">Bon De Livraison : 100 </text>
                    <text className="cls-23" transform="translate(317.49 135.03) scale(1.2 1.13)">Identification: <tspan x="0" y="15.93">
                        {location.state.Client}</tspan></text>
                    <text className="cls-23"
                        transform="translate(318.51 170.14) scale(1.2 1.13)">Adresse: : <tspan x="0" y="15.93">
                            ...................................................................</tspan>
                        <tspan x="0" y="31.86">........................................</tspan>
                    </text>
                    <text className="cls-23" transform="translate(317.49 228.06) scale(1.2 1.13)">TEL:
                        ............................</text>
                    <text className="cls-23" transform="translate(451.63 228.06) scale(1.2 1.13)">FAX: ..................</text>
                    <rect className="cls-12" x="312.87" y="99.99" width="251.81" height="22.53" />
                    <rect className="cls-13" x="312.87" y="122.52" width="251.81" height="119.67" />
                    <text className="cls-24" transform="translate(317.11 114.85) scale(0.95 1)">Code Client :</text>
                    <text className="cls-23" transform="translate(462.3 207.21) scale(1.2 1.13)">CP : 125 </text>
                    <rect className="cls-13" x="149.07" y="146.53" width="156.27" height="95.32" />
                    <text className="cls-21" transform="translate(153.07 163.67) scale(1.18 1.13)">Date Début <tspan className="cls-25" x="63.07" y="0">:
                        {location.state.Datee}</tspan></text>
                    <text className="cls-21" transform="translate(153.07 182.02) scale(1.18 1.13)">Date de Fin :<tspan className="cls-26" x="66.3" y="0"
                        xmlSpace="preserve"> {location.state.Datefin}</tspan></text>
                    <text className="cls-21" transform="translate(153.07 199.51) scale(1.18 1.13)">Heure Début<tspan className="cls-26" x="65.87" y="0"
                        xmlSpace="preserve"> : .......................</tspan></text>
                    <text className="cls-21" transform="translate(153.07 217.51) scale(1.18 1.13)">Heure de Fin<tspan className="cls-25" x="66.28" y="0"
                        xmlSpace="preserve"> : .......................</tspan></text>

                    <text className="cls-27" transform="translate(7.48 272.02) scale(1.18 1.13)">Véhicule :<tspan className="cls-28" x="47.41" y="0"
                        xmlSpace="preserve"> ..................</tspan></text>
                    <line className="cls-13" x1="2.9" y1="285.31" x2="558.16" y2="285.31" />
                    <line className="cls-13" x1="2.9" y1="285.31" x2="2.9" y2="254.72" />
                    <line className="cls-13" x1="138.5" y1="285.31" x2="138.5" y2="254.72" />
                    <text className="cls-27" transform="translate(140.8 272.02) scale(1.18 1.13)"> Matricule : <tspan className="cls-28" x="53.95" y="0">
                        {location.state.Matricule}</tspan></text>
                    <line className="cls-13" x1="281.21" y1="285.31" x2="281.21" y2="254.72" />
                    <text className="cls-27" transform="translate(285.17 272.02) scale(1.18 1.13)">KM :<tspan className="cls-28" x="19.7" y="0"
                        xmlSpace="preserve"> {location.state.KM}</tspan></text>
                    <line className="cls-13" x1="363.49" y1="285.31" x2="363.49" y2="254.72" />
                    <text className="cls-27" transform="translate(368.49 272.02) scale(1.18 1.13)">Date Mise Service:<tspan className="cls-29" x="88.03" y="0">
                    </tspan>
                        <tspan className="cls-28" x="90.84" y="0">.........................</tspan>
                    </text>
                    <text className="cls-30" transform="translate(7.48 313.34) scale(1.18 1.13)">Etat Initial Avant Reparation:
                        <tspan className="cls-31" x="162.63" y="0">
                            {location.state.EtatInitial}
                        </tspan>
                        <tspan className="cls-31">
                            <tspan x="0" y="15.93">
                            </tspan>
                            <tspan x="0" y="31.86">
                            </tspan>
                            <tspan className="cls-32" x="463.31" y="31.86">
                            </tspan>
                        </tspan>
                    </text>
                    <line className="cls-13" x1="0.9" y1="364.92" x2="556.16" y2="364.92" />
                    <line className="cls-13" x1="1.49" y1="364.92" x2="1.49" y2="334.34" />
                    <line className="cls-13" x1="1.49" y1="335.59" x2="1.49" y2="305" />
                    <text className="cls-33" transform="translate(8.48 382.83) scale(1.18 1.13)">Opération Effectuée : <tspan className="cls-34" x="118.02" y="0">
                    </tspan>{location.state.RepDescription}
                        <tspan className="cls-34">
                            <tspan x="0" y="15.93">
                            </tspan>
                            <tspan x="0" y="31.86">
                            </tspan>
                        </tspan>
                        <tspan x="0" y="47.79">
                        </tspan>
                        <tspan x="0" y="63.72">
                        </tspan>
                    </text>
                    <line className="cls-13" x1="0.5" y1="464.71" x2="555.76" y2="464.71" />
                    <path className="cls-13" d="M17.7,469.83" transform="translate(-16.61 -35.81)" />
                    <path className="cls-13" d="M17.7,500.42" transform="translate(-16.61 -35.81)" />
                    <line className="cls-13" x1="0.5" y1="464.71" x2="0.5" y2="377.31" />
                    <text className="cls-35" transform="translate(0.5 481.01)"> * Pieces De Rechange Et Fourniture Utile</text>
                    <line className="cls-13" x1="0.5" y1="723.22" x2="427.13" y2="723.22" />
                    <path className="cls-13" d="M17.56,728.34" transform="translate(-16.61 -35.81)" />
                    <path className="cls-13" d="M17.56,758.93" transform="translate(-16.61 -35.81)" />
                    <line className="cls-13" x1="0.5" y1="723.22" x2="0.5" y2="664.75" />
                    <text className="cls-36" transform="translate(5.52 693.99) scale(0.79 1)">     {location.state.Chauffeur}
                    </text>
                    <line className="cls-13" x1="350.63" y1="536.21" x2="555.76" y2="536.21" />
                    <path className="cls-13" d="M367.46,548" transform="translate(-16.61 -35.81)" />
                    <path className="cls-13" d="M367.46,571.94" transform="translate(-16.61 -35.81)" />
                    <line className="cls-13" x1="350.63" y1="536.21" x2="350.63" y2="490.51" />
                    <text className="cls-37" transform="translate(356.27 498.12)">Type D’Intervention :</text>
                    <text className="cls-36" transform="translate(356.27 513.36) scale(0.79 1)">test 12345
                    </text>
                    <line className="cls-13" x1="350.85" y1="658.1" x2="555.76" y2="658.1" />
                    <path className="cls-13" d="M367.68,636.4" transform="translate(-16.61 -35.81)" />
                    <path className="cls-13" d="M367.68,693.72" transform="translate(-16.61 -35.81)" />
                    <line className="cls-13" x1="350.85" y1="658.1" x2="350.85" y2="548.53" />
                    <text className="cls-38" transform="translate(395.09 559.37)">Technicien Intervenant :</text><text className="cls-37"
                        transform="translate(370.73 581.28)">
                        <tspan xmlSpace="preserve">N &amp; P : ..................................................................
                        </tspan>
                    </text>
                    <text className="cls-37" transform="translate(370.73 603.54)">
                        <tspan xmlSpace="preserve">Qualité : ..............................................................</tspan>
                    </text>
                    <text className="cls-35" transform="translate(442.74 621.01)">Signature </text>
                </svg>
            </div>
        </>
    )
};
export default InterventionPrint;

