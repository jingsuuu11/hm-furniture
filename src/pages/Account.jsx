import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/userRedux';



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
  font-size: 18px;
  font-weight: 400;
`;

const FormHr = styled.hr`
  border: 0.1px solid #DCDCDC;
  width: 50%;
  margin: 10px 0 15px 0;
`;

const Description = styled.p`
  margin: 13px 0;
`;

const Button = styled.button`
  width: 55%;
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


const Right = styled.div`
  flex: 1;
  padding: 20px;
  width: 60%;
  margin-left: 20px;
`;

const Error = styled.span`
  color: red
`

const AccountNav =[
    {
        id: 1,
        title: "Personal Details",
        desc: "Update your information and find out how it's used.",
        link:"/myaccount/profile",
        button:"Manage Personal Details",
    },
    {
        id: 2,
        title: "My Address Book",
        desc: "Edit your addresses or add a new one.",
        link: "/myaccount/profile",
      button: "Manage Address Book",
    },
    {
        id: 3,
        title: "My Orders",
        desc: "Get updates on your current orders.",
        link: "/cart",
      button: "View Orders",
    },
    {
        id: 4,
      title: "Preferences",
      desc: "Change your language, currency and accessibility requirements.",
      link: "/myaccount/profile",
      button: "Manage Preferences",
    },

]

const Account = () => {
  const dispatch = useDispatch();

   const handleLogout = ((e) => {
    e.preventDefault();

     dispatch(logOut());
   })

    return (
        <Container>
            <Announcement />
            <Header />
            <hr />
            <PageTitle>MY ACCOUNT</PageTitle>

          
            <Wrapper>
       <div className='accountDiv'>
          {AccountNav.map((item, index) => (
            <Link to={item.link} style={{color: 'black'}}>      
            <div className='accountItem'>
            <Title>{item.title}</Title>
                    <FormHr />
              <Description>{item.desc}
                    </Description>
              <Button>{item.button}</Button>
              </div>
              </Link>
          )
      

        )}
          </div>

          
                {/* <Left>
                    <Title>MY PROFILE</Title>
                    <FormHr />
                    <Description>
                        

                    </Description>
          
                </Left>

                <Right>
                    <Title>New Customers</Title>
                    <FormHr />
                    <Description>Creating an account has many benefits: check out faster, keep more than one address and more.
                    </Description>
                    <Button>CREATE AN ACCOUNT</Button>

                </Right> */}
            </Wrapper>
        <div className='accountBottom'>

          <a href="/about">Terms and Conditions</a>

        
          <button onClick={(e) => handleLogout(e)}>SIGN OUT</button>
         
        </div>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Account;