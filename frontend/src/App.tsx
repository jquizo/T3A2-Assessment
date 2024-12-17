import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

  
  const App = () => {

    return (
      <Router>
        <Routes>
          <Route 
            path="/" element={<>Home page</>}>
          </Route>
        </Routes>
      </Router>
    );
  };
  
  export default App;
  