import React from 'react';
import EmailSubscription from '../components/EmailSubscription';
import Subscriptionbanner from '../components/Subscriptionbanner'; // Import the Subscriptionbanner component
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: none;
  // padding: 20px;
  font-family: Arial, sans-serif;
`;

const Text = styled.p`

  font-size: 18px;
  line-height: 1.5;
  color: #333;
  font-family:system-ui; 
  text-align: center;
  padding-top: 30px;
  font-weight: 400;
  margin-left: 10px;
  margin-right: 10px;

`;



function Subscription() {
  return (
    <Wrapper>
      <Subscriptionbanner />
      <Text>
        Welcome to our Coffee Subscription service! By signing up for our subscription, 
        you're ensuring a consistent supply of freshly roasted coffee delivered right to your doorstep. 
        Experience convenience like never before as you savor the finest coffee beans from around the world, expertly curated to suit your taste preferences. 
        Plus, with our weekly newsletter, you'll stay updated on the latest trends, news, and innovations in the vibrant world of coffee. 
        Subscribe now by entering your email below and embark on a journey of discovery to elevate your coffee experience!
      </Text>
      {/* <Form>
        <Input type="email" placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </Form> */}
      <EmailSubscription />
    </Wrapper>
  );
}

export default Subscription;