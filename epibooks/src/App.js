import logo from './logo.svg';
import './App.css';
import AllTheBooks from './Components/AllTheBooks1';
import BookList from './Components/BookList1';
import MyFooter from './Components/MyFooter1';
import MyNav from './Components/MyNav1';
import SingleBook from './Components/SingleBook1';
import Welcome from './Components/Welcome1';
import CommentArea from './Components/CommentArea';
import fantasy from "../src/data/fantasy.json"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
       
      </Container>
      <MyFooter />
    </>
  )
}

export default App
