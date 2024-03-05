// career-up/apps/edu/src/components/layout.tsx

import { useSetAtom } from "jotai";
import React, { useEffect } from "react";
import { getCourses, getUser } from "../apis";
import { coursesAtom, userAtom } from "../atoms";
import MyCourseInfoContainer from "../containers/my-course-info-container";
import ProfileContainer from "../containers/profile-container";
import useAuth0Client from "../providers/use-auth0-client";
import { LayoutWrapper } from "./layout.styles";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const auth0Client = useAuth0Client();
  const setUser = useSetAtom(userAtom);
  const setCourses = useSetAtom(coursesAtom);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        getUser(token).then(setUser);
        getCourses(token).then(setCourses);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client, setCourses, setUser]);

  return (
    <LayoutWrapper>
      <div className="edu--layout-left">
        <ProfileContainer />
        <MyCourseInfoContainer />
      </div>
      <div className="edu--layout-center">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
