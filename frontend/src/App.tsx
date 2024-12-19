import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import Layout from './layouts/Layout';
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

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
            path="/register" element={<Layout><Register/></Layout>}>
          </Route>
          <Route 
            path="/sign-in" element={<Layout><SignIn/></Layout>}>
          </Route>
          <Route 
            path="/*" element={<Layout></Layout>}>
          </Route>
        </Routes>
      </Router>
    );
  };
  
  export default App;
  