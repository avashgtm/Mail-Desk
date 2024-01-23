import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginWithGoogleButton from './LoginWithGoogleButton';

class Header extends Component {
	renderContent() {
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return (
						  <li>
	              <div className="uk-navbar-item">
	              	<a href="/auth/google">
	        					<LoginWithGoogleButton />
	        				</a>
	              </div>
		          </li>
				);
			default:
;				return [
		          <li key="1">
		          	<a href="api/logout">Logout</a>
		          </li>
				];

		}
	}
	render() {
		return (
		<nav className="uk-navbar-container">
		    <div className="uk-container">
		        <div uk-navbar="true" className="uk-navbar">
		            <div className="uk-navbar-left">
		            	<Link to="/" className="uk-navbar-item uk-logo">Mail Desk</Link>
		            </div>

		            <div className="uk-navbar-right">

		                <ul className="uk-navbar-nav">
		                	{this.renderContent()}
		                </ul>

		            </div>

		        </div>
		    </div>
		</nav>
		);
	}
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);