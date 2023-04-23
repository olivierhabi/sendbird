import PrivateRoute from '../../atoms/PrivateRoute';
// import {
//     Switch,
//     useRouteMatch,
// } from 'react-router-dom';
import DirectCallMain from "../GroupCallMain";
import LoginPage from '../LoginPage/LoginPage';
import { useSbCalls } from "../../../lib/sendbird-calls"


const DirectCallFullScreen = (pageProps: any) => {
    const { isAuthenticated } = useSbCalls();

    return (
        <>
            <div>
                {!isAuthenticated ? (<LoginPage />) : (<DirectCallMain />)}

            </div>

        </>
    )

    // return <PrivateRoute component={DirectCallMain} {...pageProps} />;
};

export default DirectCallFullScreen;
