import React from 'react';
import './CSS/RdvCard.css'
import { Card } from 'react-bootstrap';
import Popup from "reactjs-popup";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const RdvCard = (props) => {
    const [returnedData, setReturnedData] = useState(null)
    const { title, time, shortDetails } = props.appointmentData;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const key = (length=6)=>Math.random().toString(20).substr(2, length);
        const appointmentInfo = { title, key: key(), details: data, action: "notVisited", action1: "pending"}
        console.log(appointmentInfo);
        fetch("https://guarded-anchorage-08361.herokuapp.com/addAppointment", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                setReturnedData(data)
                reset()
            })
    };

    return (
        <div className="col-md-4 appointmentType">
            <Card style={{ width: '18rem', border: "none", boxShadow: "5px 5px 10px lightGray",backgroundColor:"white" }}>
                <Card.Body>
                    <h5>RDV</h5>
                    <p className="mb-2 text-muted">{time}</p>
                    <p><small></small></p>
                    <Popup trigger={<button>Prendre Un Rdv</button>} contentStyle={{ width: "600px", border: "none", background: "transparent" }} modal closeOnDocumentClick>
                        <div className="popupDetails">
                            <h5>{title}</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="time" className="takeInput" placeholder="Time" defaultValue={time} {...register('time')} />
                                <br />
                                <br />
                                <input  className="takeInput" placeholder="Nom Du patient" {...register('name',{ required: true })} />
                                <br />
                                {errors.name && "Champs Obligatoire"}
                                <br />
                                <input  className="takeInput" placeholder="Numero de Teléphone" {...register('phoneNumber', { required: true })}  />
                                <br />
                                {errors.phoneNumber && "Entrer Un Numero valide"}
                                <br />
                                <input  className="takeInput" placeholder="Email" {...register('email',{ pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, required: true })} />
                                <br />
                                {errors.email && "Entrer Un Email Valide"}
                                <br />
                                <input className="takeInput" placeholder="mm/dd/yyyy" defaultValue={props.fullDate1} {...register('date',{ pattern: /^(0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])[/-]\d{4}$/, required: true })} />
                                <br />
                                {errors.date && "Entrer Une Date Valide"}
                                <br />
                                <div className="submitBtn">
                                    <input type="submit" value="Send" />
                                </div>
                                {
                                    returnedData &&
                                    <div>
                                        <p>Ton Rdv Id: {returnedData._id}</p>
                                        <a href="/secretaryZone/secretaryDashbord">Revenir Vers Le Tablea De Board</a>
                                    </div>
                                }
                            </form>
                        </div>
                    </Popup>

                </Card.Body>
            </Card>
        </div>
    );
};

export default RdvCard;