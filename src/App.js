import AllMeetupsPage from './pages/AllMeetups.js';
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
            <Route path='/' element={<AllMeetupsPage />}/> 
            <Route path='/new-meetup' element={<NewMeetupPage />}/> 
            <Route path='/favorites' element={<FavoritesPage />}/> 
          </Routes>  
          </Layout>
    </Router>
  );
}

export default App;
