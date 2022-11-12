import React, { Component } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCall';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.section`
  // width: 100vw;
  height: 100vh;
  
`;

const Wrapper = styled.div`
  margin: 35px auto;
  padding: 25px auto;
  height: 85%;
  width: 40%;
  align-items: center;
  ${mobile({ width: "80%" })};
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0 0;
  min-width: 40%;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0; 
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;

`;


// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username:"",
//       email:"",
//       password:""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleSubmit () {
//     e.preventDefault();
//     const onSubmit = {username, email, password} = this.state;
//     console.log(username, email, password);
//   }

//   render(){
//     return(
//       <Container>
//         <Announcement />
//         <Header />
//         <hr />
//         <Wrapper>
//           <Title>Create New Customer Account</Title>
//           <Form onSubmit={this.handleSubmit}>

//             <Input 
//             placeholder="USERNAME" 
//             type="text" 
//             onChange={(e) => this.setState({username: e.target.value})} />

//             <Input 
//             placeholder="EMAIL ADDRESS" 
//             type="text" 
//             onChange={(e) => this.setState({email: e.target.value})} />

//             <Input 
//             placeholder="PASSWORD" 
//             type="text" 
//             onChange={(e) => this.setState({password: e.target.value})}  />

//             <Agreement>
//               I agree to Terms and Conditions. See Privacy and Cookie Policy for information on how we use the the information you provide to us.
//             </Agreement>

//             <Button>CREATE AN ACCOUNT</Button>
//           </Form>
//         </Wrapper>
//         <Newsletter />
//         <Footer />
//       </Container>
//     )
//   }
// }



const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>;
};

Message.defaultProps = {
  variant: "alert-info",
};

const Register = ({ location, navigate }) => {

  window.scrollTo(0, 0);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate.push("/");
    }
    
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
    setSuccess(true);
    //clear state and controlled inputs
    //need value attrib on inputs for this
    setUserName('');
    setEmail('');
    setPassword('');
  };


  return (
    <Container>
      <Announcement />
      <Header />
      <hr />
      <Wrapper>
           {success ? (
              
                <section className='success_section'>
                    <h1 style={{textAlign:"center", fontSize: "30px", paddingTop:"30px"}}>Thanks For Signing Up!</h1>
            <p style={{ textAlign: "center", fontSize: "20px", margin:"15px auto" }}>  You Now have access to our products!</p>

              <a href="/login"><button type="submit" className='register_up_button' >SIGN IN</button></a>
                    
                </section>
            ) : (
            <section>
            <Title>Create New Customer Account</Title>
            {error && <Message variant="alert-danger">{error}</Message>}

            <Form onSubmit={submitHandler}>

              <label htmlFor="username" className='form_label'>
                USERNAME:
              </label>

              <input
                placeholder="USERNAME"
                type="text"
                className='form_Input'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required />


              <label htmlFor="email" className='form_label'>
                EMAIL ADDRESS
              </label>

              <input
                placeholder="EMAIL ADDRESS" type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='form_Input' />

              <label htmlFor="password" className='form_label'>
                PASSWORD:
              </label>
              <input
                type="password"
                placeholder='PASSWORD'
                className='form_Input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className='register_button' >CREATE AN ACCOUNT</button>

              <p>
                Already registered?<br />
                <span className="line">
                  {/*put router link here*/}
                  <a href="/login" className='signIn_Link'>Sign In</a>
                </span>
              </p>
            </Form>
            </section>
     
            )}

      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Register;