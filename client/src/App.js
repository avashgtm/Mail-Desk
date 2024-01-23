import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as actions from './actions';
import {connect} from 'react-redux';
import Header from './components/Header';
import Landing from './components/Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="uk-container">
              <Routes>
                <Route exact path="/" element={<Landing/>} />
                <Route path="/surveys" element={<Dashboard/>} />
                <Route path="/surveys/new" element={<SurveyNew/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

