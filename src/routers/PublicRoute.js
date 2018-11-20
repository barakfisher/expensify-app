import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated, 
    component: Component, // calling component as Component convetion
    ...rest //access to all of the other objects porps
}) => (
    <Route {...rest} component = { (props)=>(
        isAuthenticated ? (
                <Redirect to="/dashboard" />
        ) : (
            <Component {...props}/>

        )

    )}/>
);

const mapStateToProps = (state) =>({
    isAuthenticated : !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);