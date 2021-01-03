import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B.E in Information Technology" where="Jadavpur University" from="July 2015" to="May 2019"/>
<Widecard title="Senior Secondary" where="D.A.V Public School" from="2012" to="2014"/>
</div>
)
}
}

export default Education