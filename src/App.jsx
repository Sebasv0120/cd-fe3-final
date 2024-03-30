import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Detail from './Detail';
import Favs from './Favs';
import Navbar from './Navbar';
import Footer from './Footer';
import { ContextProvider } from '../Context';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacto" component={Contact} />
          <Route path="/dentist/:id" component={Detail} />
          <Route path="/favs" component={Favs} />
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
};

export default App;