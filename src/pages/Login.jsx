import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/apiCall'; 


const Container = styled.div`
  // width: 100vw;
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const PageTitle = styled.h2`
  margin: 25px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  padding: 20px auto;
  height: 60%;
  width: 80%;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  width: 60%;
  margin-right: 20px;
  ${mobile({ width: "80%" })};
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 400;
`;

const FormHr = styled.hr`
  border: 0.1px solid #DCDCDC;
  width: 50%;
  margin: 10px 0 15px 0;
`;

const Description = styled.p`
  margin: 15px 0;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  min-width: 40%;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  margin: 5px 0 10px 0;
  border: none;
  background-color: #CC9966;
  color: white;
  cursor: pointer;
  &:disabled{
    color: green;
    cursor: not-allowed
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  width: 60%;
  margin-left: 20px;
`;

const Error = styled.span`
  color: red
`


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
   
    <Container>
      <Announcement />
      <Header />
      <hr />
      <PageTitle>Customer Login</PageTitle>

      <Wrapper>
        <Left>
          <Title>Registered Customers</Title>
          <FormHr />
          <Description>If you have an account, sign in with your email address.
          </Description>
          <Form>
            <Input placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="PASSWORD" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleClick} disabled={isFetching}>SIGN IN</Button>
            {/* {error && <Error>Something went wrong...</Error>} */}
            <Link>Forgortten your password?</Link>
          </Form>
        </Left>

        <Right>
          <Title>New Customers</Title>
          <FormHr />
          <Description>Creating an account has many benefits: check out faster, keep more than one address and more.
          </Description>
          <Button>CREATE AN ACCOUNT</Button>

        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Login;