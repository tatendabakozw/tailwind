import './App.css';
import Nav from './Nav';
import useDarkMode from './useDarkMode';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  useDarkMode()
  return (
    <BrowserRouter>
      <Switch>
        <div className="App bg-gray-500 dark:bg-gray-900 h-screen">
          <div>
            <Nav />
          </div>
          <h1 className="text-center text-black dark:text-gray-50">Tailwind Css Boilerplate</h1>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
