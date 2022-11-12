import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


const Container = styled.section`
  // width: 100vw;
  height: 100vh;
  
`;

const Wrapper = styled.div`
  margin: 35px auto;
  padding: 25px auto;
  height: 50%;
  width: 60%;
  align-items: center;
  
`;



const Contact = () => {
    return (
        <Container>
            <Announcement />
            <Header />
            <hr />
            <Wrapper>
                <div className='contact_div'>
                    <h1>Are you a customer who needs help? That's what the HM FURNITURE TEAM is for.</h1>
                    <ul>
                        <li>If you're wondering about an order, our products, or our website, shoot them an email at <strong>huamei5558@gmail.com</strong> or check out the <strong><a href="/about">Help & FAQs section</a></strong>—the answer might be there already!</li>

                        <li>For everything else...</li>

                        <li> <strong>Business + Partnerships</strong>: huamei5558@gmail.com</li>

                        <li><strong>Phone Number</strong>: +(626)-365-8922</li>

                        <li><strong>Address</strong>: 21528 Lost River Drive, Diamond Bar, CA, 91765</li>
                    </ul>
                </div>


            </ Wrapper>
            <Newsletter />
            <Footer />
        </ Container>
    )
}

export default Contact