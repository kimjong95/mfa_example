import { useAuth0Client } from "@career-up/shell-router";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplyStatus } from "../apis";
import ApplyStatus from "../components/apply-status";
import { AppDispatch, type RootState } from "../redux/create";
import { done, fail, start } from "../redux/modules/applyStatus";

const ApplyStatusContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch<AppDispatch>();
  const applyStatus = useSelector((state: RootState) => state.applyStatus.data);

  const fetchApplyStatus = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const applyStatus = await getApplyStatus(token);
      dispatch(done(applyStatus));
    } catch (error) {
      dispatch(fail(error));
    }
  }, [dispatch, auth0Client]);

  return (
    <ApplyStatus
      fetchApplyStatus={fetchApplyStatus}
      applyStatus={applyStatus}
    />
  );
};

export default ApplyStatusContainer;
