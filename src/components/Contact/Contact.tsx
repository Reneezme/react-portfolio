import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Here's my contact! </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:rezafarrass@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:rezafarrass@gmail.com">Gmail</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+62) It's kinda sensitive!</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}