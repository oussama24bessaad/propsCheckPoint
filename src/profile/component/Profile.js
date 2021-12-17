import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";


function Profile(props) {
  return (
    <div>
      <div>
        <h2>
          {props.fullname} </h2><h3> {props.bio}</h3><h4>{props.profession}</h4> 
       
      </div>
      <Button variant="info" onClick={() => props.handleName(`Username:  ${props.fullname}`)}>
        Username!
      </Button>
      <br/> <br/>
      <div> {props.children}</div>
    </div>
  );
}
Profile.defaultProps = {
  fullname: "Empty",
  bio: "Empty",
  profession: "Student",
  handleName: function () {
    return alert("hi");
  },

  children: "profile picture",
};
Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.any,
};

export default Profile;
