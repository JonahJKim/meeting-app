import AllMeetupsPage from './pages/AllMeetups.js';
import SignUpPage from './pages/SignupPage.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favorites.js';
import Layout from './components/layout/Layout.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  // localhost: 3000
  // something like my-page.com/{path} i.e. /favorites
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path='/' element={<SignUpPage />}/> 
            <Route path='/home' element={<AllMeetupsPage />}/> 
            <Route path='/new-meetup' element={<NewMeetupPage />}/> 
            <Route path='/favorites' element={<FavoritesPage />}/> 
          </Routes>  
        </Layout>
    </Router>
  );
}

export default App;
