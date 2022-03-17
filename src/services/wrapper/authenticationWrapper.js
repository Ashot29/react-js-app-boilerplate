import React from 'react';
// import history from "./../history/history";
// import CacheService from "./../cache/CacheService";

export default function (ComposedComponent) {
    class Authenticate extends React.Component {

        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            // let token = CacheService.getUserToken();
            // if (!token) {
            //     history.push("/login");
            // }
            console.log(1)
        }

        render() {
            // let token = CacheService.getUserToken();
            // return (
            //     token ? <ComposedComponent {...this.props} /> : null
            // );
            return (
                <div>implement cache</div>
            )
        }
    }
    return Authenticate;
}
