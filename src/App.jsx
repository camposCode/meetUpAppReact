import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllMeetUp from "./pages/AllMeetUp";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <Router>
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
        
                      
