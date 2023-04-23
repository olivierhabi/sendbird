import { useSbCalls } from "../../../lib/sendbird-calls";
// import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Header from "../../organisms/Header";
import Authenticator from "../../../containers/Authenticator";
import CallView from "../../views/CallView";
import DialView from "../../views/DialView";
import styled from "styled-components";
import { media } from "../../../../utils";
import Screen from "../../templates/Screen/Screen";
import * as mixins from "../../../../styles/mixins";
import Overlay from "../../atoms/Overlay";
import { useRouter } from "next/router";



const Wrapper = styled(Screen)`
  width: 100vw;
  height: 100vh;
  color: rgb(33, 34, 66);
  background-color: rgb(255, 255, 255);
  ${media.main} {
    background-color: rgb(246, 248, 252);
  }
`;



const Contents = styled(Screen)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: calc(100% - 80px - 57px);
  ${media.main} {
    height: calc(100% - 48px - 56px);
  }
`;

const FormContainer = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  background-color: white;

  ${media.main} {
    max-width: 500px;
    border: solid 1px #dee2f2;
    border-radius: 4px;
    padding: 48px 78px 48px;
  }
`;

interface DirectCallMainProps {
}
const DirectCallMain: React.FC<DirectCallMainProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, calls } = useSbCalls();
  // const history = useHistory();
  // const location = useLocation();
  // const query = new URLSearchParams(useLocation().search);
  // const { path, url } = useRouteMatch();

  // useEffect(() => {
  //     if (location.pathname === `${url}/login`) {
  //         if (isAuthenticated) {
  //             history.replace('/main/dial');
  //         }
  //     }
  // }, [isAuthenticated, location.pathname]);

  const onCall = useMemo(() => {
    return calls.find(call => call.isOngoing)
  }, [calls])

  const header = [
    <Header key="header" />,
    // <Authenticator key="authenticator" />,
  ]

  return (

    <Wrapper>
      {/* {!!calls.length && <CallView call={calls[calls.length - 1]} />} */}
      {header}
      <Contents>


        <FormContainer>
          <DialView />
          {onCall &&
            <Overlay>
              <CallView call={onCall} />
            </Overlay>
          }
        </FormContainer>
      </Contents>
    </Wrapper>
  );
};

export default DirectCallMain;