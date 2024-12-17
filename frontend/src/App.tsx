import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import Layout from './layouts/Layout';
  
  const App = () => {

    return (
        
      <Router>
        <Routes>
          <Route 
            path="/" element={<Layout></Layout>}>
          </Route>
          <Route 
            path="/search" element={<Layout></Layout>}>
          </Route>
          <Route 
            path="/*" element={<Layout></Layout>}>
          </Route>
        </Routes>
      </Router>
    );
  };
  
  export default App;
  