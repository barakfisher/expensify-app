//Higher order componenets (HOC) - a component that renders another component
// Reuse code
//render highjackoing
//prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div> 
        <h1> Info </h1>
        <p> the info {props.info}</p>
    </div>
);

const withAdminWrrning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> this is private info. please dont share </p> }
            <WrappedComponent {...props} />
        </div>
    );  
}

const AdminInfo = withAdminWrrning(Info);

const reaquireAuthintication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?  <WrappedComponent {...props} /> : <p> not authenticated </p> }
        </div>
    );

}
const AuthInfo  = reaquireAuthintication(Info)



// ReactDOM.render(<AdminInfo info="myINFO" isAdmin={false} />, document.getElementById('app') );
ReactDOM.render(<AuthInfo info="myINFO" isAuthenticated={false} />, document.getElementById('app') );