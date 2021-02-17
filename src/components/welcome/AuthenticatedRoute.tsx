import React, { FunctionComponent } from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import AuthenticationService from '../../services/AuthenticationService'

interface PrivateRouteProps extends RouteProps {
    component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}
// class AuthenticatedRoute extends Component {
//     render() {
//         if (AuthenticationService.isUserLoggedIn()) {
//             return < Route {...this.props} />
//         } else {
//             return <Redirect to="/welcome" />
//         }
//     }
// }

const AuthenticatedRoute: FunctionComponent<PrivateRouteProps> = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                AuthenticationService.isUserLoggedIn() ? (
                    < Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/welcome"
                        }}
                    />
                )
            }
        />
    );
};

export default AuthenticatedRoute