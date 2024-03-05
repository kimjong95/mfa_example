import { useAuth0Client } from "@career-up/shell-router";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../apis";
import JobList from "../components/job-list";
import { type AppDispatch, type RootState } from "../redux/create";
import { done, fail, start } from "../redux/modules/jobs";

const JobListContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch<AppDispatch>();
  const jobs = useSelector((state: RootState) => state.jobs.data);

  const fetchJobs = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const applyStatus = await getJobs(token);
      dispatch(done(applyStatus));
    } catch (error) {
      dispatch(fail(error));
    }
  }, [dispatch, auth0Client]);

  return <JobList jobs={jobs} fetchJobs={fetchJobs} />;
};

export default JobListContainer;
