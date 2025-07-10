// 01. Introduction
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

// 02. Create Card
import Card from "./Card";

// 03. React js how to add CSS styles 
import Button from './Button/Button.jsx'

// 04. PROPS - Student
// import Student from "./Student.jsx";

// 05. Condtional Rendering
import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      {/* <Header/>
      <Food/>
      <Footer/> */}

      {/* <Card />
      <Card /> */}

      {/* <Button /> */}

      {/* <Student name="Vajee" age={25} isStudent={true}/>
      <Student name="Saakeer" age={24} isStudent={true}/>
      <Student name="Mufees Kizhavan" age={45} isStudent={false}/>
      <Student /> */}

      <UserGreeting isLoggedIn={true} />

      <UserGreeting isLoggedIn={true} username="Vajee" />
      <UserGreeting isLoggedIn={false} username="Saaker" />
    </>
  );
}

export default App
