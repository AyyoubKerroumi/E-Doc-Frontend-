import React,{ useState,useEffect} from 'react';
import './CSS/CardList.css';
import { useSelector } from 'react-redux';


function CardList() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    const [D, setDate] = React.useState();
    const [dateValue,setDateValue] = React.useState("2022-01-01");
    const [RdvData, setRdvData] = useState([]);
    const addDuree = (time,duree)=>{
        const words = time.split(":");
        let hh = parseInt(words[0]);
        let mm = parseInt(words[1]);
    
        hh += parseInt(duree / 60);
        duree %= 60;
        mm += parseInt(duree);
        if( mm >= 60){
            hh += 1;
            mm = mm % 60;
        }
        if( mm === 0)  
            mm = '00'
        if(hh < 10)
            hh = `0${hh}`;
        let rdv = `${hh}:${mm}`;
        return rdv;
    }

    const makeRdvData = (data)=>{
        //console.log(data?.M?.dispo);
        console.log(data);
        let Rdv = new Array();
        //ajouter les Rendez-Vous du matin
        for(let i=0; i<data?.length; i++){
            Rdv.push(data[i]);
        }
        //ajouter les Rendez-Vous du Soir
        setRdvData(Rdv);
        console.log(Rdv);
    }

    const changeDate = (ev)=>{
        setDate(ev.target.value);
        console.log(D);
        let d = new Date( D );
        let dd = d.getDate();
        let mm = d.getMonth()+1;
        let yy = d.getFullYear();
        let fullDate = `${yy}/${mm}/${dd}`;
        setDateValue(fullDate);
        console.log(fullDate);
        const body = {"fullDate":fullDate };
        fetch("http://127.0.0.1/E-DOC/api/Secretaire/allRdv.php", {
            method: "post",
            headers: { 
                "Authorization":'Bearer '+userInfo?.jwt,
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                makeRdvData(data);
            })
    }
    return (
        <div className="row" >
            <div className="d_flex my-4">
                <h3 style={{fontWeight: "1rem"}}>Selectionner Une Date</h3>
            </div>
            <input onChange={changeDate}  name="date" type="date" style={{width: "30%"}} value={dateValue}></input>
            <div className="d_flex my-4, text-uppercase">
                <h1 style={{textAlign: 'center',marginTop:"40px"}}>Liste Des RDV</h1>
            </div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Nom</th>
                        <th>CIN</th>
                        <th>email</th>
                        <th>periode</th>
                        <th>ordre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        RdvData.map(item =>(
                            <tr key={item.ordre}>
                                <td>{item.name}</td>
                                <td>{item.cin}</td>
                                <td>{item.email}</td>
                                <td>{item.M_S}</td>
                                <td>{item.ordre}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CardList
