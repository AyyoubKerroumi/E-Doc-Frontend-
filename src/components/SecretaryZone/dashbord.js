import React , { useEffect } from 'react'
import AsideBar from '../asideBar';
//import Logo from '../../images/logo.png'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';



const Dashbord = () => {
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    useEffect(() => {
        if (!userInfo) {
        navigate('/SecretaryZone/login')
        }
    }, [userInfo, navigate])
    return (
        <div className="Dashbord">
            <div className="main">
                    < AsideBar />

            </div>
        </div>
    )
}

export default Dashbord;
