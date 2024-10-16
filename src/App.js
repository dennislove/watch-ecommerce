import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/index';
import { routes } from './routes';
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((routes) => {
          const Page = routes.element;
          const Layout = routes.isShowHeader ? DefaultComponent : Fragment;
          return (
            <Route
              key={routes.path}
              path={routes.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
