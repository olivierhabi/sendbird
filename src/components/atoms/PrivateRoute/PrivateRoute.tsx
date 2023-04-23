// import {
//   useHistory,
//   useRouteMatch,
//   useLocation,
//   Route,
//   RouteProps,
// } from 'react-router-dom';

import { useSbCalls } from '../../../lib/sendbird-calls';
import { useRouter } from "next/router";

const PrivateRoute = ({ component: Component,render = () => null, ...otherProps }: any) => {
  const { isAuthenticated } = useSbCalls();
  const router = useRouter();
 
  // if (!isAuthenticated) {
  //   typeof window !== 'undefined' &&  router.push("/login");
  // }
  return <Component {...otherProps} />;

  
}
// const PrivateRoute = ({ component: Component, render = () => null, ...props }: RouteProps) => {
//   const { url } = useRouteMatch();
//   const { isAuthenticated } = useSbCalls();
//   const history = useHistory();
//   const query = new URLSearchParams(useLocation().search);

//   return <Route {...props} render={renderProps => {
//     if (!isAuthenticated) {
//       query.set('referrer', url);
//       history.push(`/login?${query.toString()}`);
//       return null;
//     }
//     if (Component) return <Component {...renderProps} />;
//     return render(renderProps);
//   }} />
// }

export default PrivateRoute;
