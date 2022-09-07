import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUp from "./pages/AllMeetUp";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route 
          path="/" 
          exact
          element={
            <AllMeetUp />
          } />
        <Route 
            path="/favorites"
            element={ <Favorites />} />
        <Route 
          path="/new"
          element={ <NewMeetUp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
        
                      
