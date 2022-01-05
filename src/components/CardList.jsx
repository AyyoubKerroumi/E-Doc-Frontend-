import React,{ useState,useEffect} from 'react';
import './CSS/CardList.css';

function CardList() {
    const [item,setItem] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1/E-DOC/api/Secretaire/listePatients.php")
        .then(res => res.json())
        .then(
            (result) =>{
                setItem(result);
                console.log(result);
            }
        )
    })
    return (
        <div className="row" >
            <div className="d_flex my-4, text-uppercase">
                <h1 style={{textAlign: 'center',marginTop:"40px"}}>Liste Des Patients</h1>
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
                        item.map(item =>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.cin}</td>
                                <td>{item.email}</td>
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

export default CardList
