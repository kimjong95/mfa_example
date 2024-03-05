import { useAuth0Client } from "@career-up/shell-router";
import React, { useCallback, useState } from "react";
import { getJobs } from "../apis";
import { type JobType } from "../types";
import RecommendJobs from "./recommend-jobs";

const RecommendJobsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [jobs, setJobs] = useState<JobType[]>([]);

  const fetchJobs = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const jobs = await getJobs(token);
      setJobs(jobs.slice(0, 3));
    } catch (error) {
      alert(error);
    }
  }, [auth0Client]);

  return <RecommendJobs jobs={jobs} fetchJobs={fetchJobs} />;
};

export default RecommendJobsContainer;
