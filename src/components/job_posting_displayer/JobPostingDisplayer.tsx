import { Job } from '../../utils/types';
import JobPosting from '../job_posting/JobPosting';
import chroma from "chroma-js"

interface JobPostingProps {
  jobs: Job[];
}
const JobPostingDisplayer = ({ jobs }: JobPostingProps) => {
  return (
    <ul>
      {jobs.map((job: Job) => (
        <>
          <JobPosting key={job.id} job={job} bgColor={chroma.random()} />
          <br />
        </>
      ))}
    </ul>
  );
};

export default JobPostingDisplayer;
