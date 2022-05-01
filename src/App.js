import logo from './logo.svg';
import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favorites.js';
import MainNavigation from './components/layout/MainNavigation'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  // localhost: 3000
  // something like my-page.com/{path} i.e. /favorites
  return (
    <Router>
      <div>
        <MainNavigation />
        <Routes>
            <Route path='/' element={<AllMeetupsPage />}/> 
            <Route path='/new-meetup' element={<NewMeetupPage />}/> 
            <Route path='/favorites' element={<FavoritesPage />}/> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
