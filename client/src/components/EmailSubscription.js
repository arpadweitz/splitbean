import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #764a38;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c9761b;
  }
`;


const EmailSubscription = () => {
  // const defaultSubject = "Here is the message: ";

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Extracting email value from form field
    const email = event.target.elements.email.value;

    // Constructing data object
    const data = { email };

    try {
      // Sending data to server
      const res = await axios.post("http://localhost:5010/emails/send_email", data);
      console.log("Response: ", res);
      // Clearing the input field
      event.target.elements.email.value = "";
      // Inform user
      alert("Thank you for subscribing :)");
    } catch (error) {
      console.log(error?.message || error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        name="email" // Add name attribute
        required
      />
      <Button type="submit">Subscribe</Button>
    </Form>
  );
};

export default EmailSubscription;