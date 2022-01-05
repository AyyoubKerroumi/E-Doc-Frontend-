import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg';
import {MdComputer} from 'react-icons/md'; 
//import { logout } from '../actions/secretaryActions'
const Navbar = () => {
  //const dispatch = useDispatch()
  //const logou = () => dispatch(logout())
  //const userLogin = useSelector(state => state.userLogin)
  //const { userInfo } = userLogin
  return (
      <Component>
        <Div>
          <Title>
            <h1>E-Doc</h1>
          </Title>
          <Nav>
            <Log><CgProfile/><Link to='/PatientZone/login'>Login</Link></Log>
            <Reg><MdComputer/><Link to='/PatientZone/register'>Register</Link></Reg>
          </Nav>
        </Div>
      </Component>
    // <nav id='main-nav' class='bg-primary'>
    //   <div class='container'>
    //     <h1 class='l-heading'>
    //       E-Doc
    //     </h1>
    //     <ul>
    //       {!userInfo ? (
    //         <>
    //           <li>
    //             <Link to='/register'>Register</Link>
    //           </li>
    //           <li>
    //             <Link to='/login'>Login</Link>
    //           </li>
    //         </>
    //       ) : (
    //         <li onClick={logou} className='flex'>
    //           <p>logout</p>
    //           <i class='fas fa-sign-out-alt'></i>
    //         </li>
    //       )}
    //     </ul>
    //   </div>
    // </nav>
  )
}


const Component = styled.div`
    z-index: 1050;
    top:0;
    position:relative;
}
`;
const Div = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.div`
h1{
  color:white;
  font-family: monospace;
}
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px){
    display: none;
}
}
`;
const Log = styled.div`
    margin-right:10px;
    display: flex;
    flex-direction: row;
    svg{
      padding-top: 5px;
      width:25px;
      height:25px;
    }
  a{
    text-decoration: none;
    color:white;
    background-color: initial;
  }
  a:hover{
    color:blue;
    font-weight: bold;
  }
`;
const Reg = styled.div`
margin-right:10px;
display: flex;
    flex-direction: row;
    svg{
      padding-top: 5px;
      width:25px;
      height:25px;
    }
a{
  text-decoration: none;
  color:white;
    background-color: initial;
}
a:hover{
  color:blue;
  font-weight: bold;
}
`;

export default Navbar
