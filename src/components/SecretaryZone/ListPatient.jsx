import React , { useEffect } from 'react'
import AsideBar from '../asideBar';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardList from '../CardList';
import '../CSS/listPatient.css';


function ListPatient() {
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    useEffect(() => {
        if (!userInfo) {
        navigate('/SecretaryZone/login')
        }
    }, [userInfo, navigate])
    return (
        <div>
            < AsideBar />
            <div className="listPatient"><CardList/></div>
        </div>
    )
}

export default ListPatient
