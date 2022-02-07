import React from 'react';
import './CSS/CardList.css';
import { FcSearch } from "react-icons/fc";


function CardList({patients}) {
    
    return (
        <div className="row" >
            <div className="d_flex my-4, text-uppercase">
                <h1 style={{textAlign: 'center',marginTop:"40px"}}>Liste Des Patients</h1>
            </div>
            <div className="Search-bar">
                <FcSearch className="search-icon"/>
                <input type="search" className="search" placeholder="Chercher Un patient Par CIN"></input>
            </div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>CIN</th>
                        <th>email</th>
                        <th>ajouter Fiche Patient</th>
                        <th>Modifier Fiche Patient</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(patients).map(key =>(
                            <tr key={patients[key].id}>
                                <td>{patients[key].name}</td>
                                <td>{patients[key].cin}</td>
                                <td>{patients[key].email}</td>
                                <td><button type="button" class="btn btn-success">Ajouter</button></td>
                                <td><button type="button" class="btn btn-primary">Modifier</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CardList;
