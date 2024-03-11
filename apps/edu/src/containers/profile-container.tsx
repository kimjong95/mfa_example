import { Profile } from "@career-up/ui-kit";
import { useAtomValue } from "jotai";
import React from "react";
import { userAtom } from "../atoms";

const ProfileContainer: React.FC = () => {
  const user = useAtomValue(userAtom);

  return <Profile user={user} />;
};

export default ProfileContainer;
