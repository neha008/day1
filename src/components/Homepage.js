import React from 'react';
import "./Homepage.css";

const Homepage = (props) => {

    return (
        <div className="home" >
           <form>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email" ></input>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"></input>
  </div>
  <button type="submit" className="btn btn-default" onClick={props.handlePortal} >Submit</button>
</form>
        </div>
    )

}

export default Homepage;

