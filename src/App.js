//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar'
import PlayGame from './components/PlayGame';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FlashcardPage from "./pages/FlashcardPage";
import GamePage from "./components/GamePage";
import {ThemeProvider, createTheme } from "@mui/material/styles";

/* let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
]

let [first, second, third] = days;

console.log(first);
*/

let user = {
  name : "Zack",
  isLoggedIn: true,
  passowrd: "123",
  flashcard: {question: "What?"}
}

// let {name, isLogged: isLoggedIn, password, flashcard: {question}} = user;

// console.log(user.name)


// Destructuring in JS
// Array Destructring allows us to provide aliiases in place of index retrieval. based on index/position
// Object Destructuring is based on key retrieval

const darkTheme = createTheme({
  palette: {
    mode:'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar user= {user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path="/games" element={<GamePage />} />
      </Routes>
    </ThemeProvider>
    
  );
  }
    /*<>
    <LoginForm />
    <PlayGame/>
    <Navbar user={user}/>
    </> */
   
   
   
   
   
   
    /* <>
      <Navbar user={user}/>
      <DaysOfTheWeek days= {days[first]}/>
    </>
   */
    
  //);
//}

/* export function DaysOfTheWeek(props) {
  return <h1>Days of the week</h1>
}
*/
export default App;
