import React from 'react';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
import UsersPage from './pages/UsersPage';
import {Route, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <div>
      {/* <CounterContainer />
      <hr />
      <SampleContainer /> */}
        <UsersPage/>
        <Routes>
            <Route path="/users/:id" element={<UserPage/>} />
        </Routes>


    </div>
  );
};

export default App;
