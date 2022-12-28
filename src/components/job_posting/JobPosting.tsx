import * as React from 'react';
import JobTag from '../job_tag/JobTag';
import ProinLogo from '../../assets/logo-proin.webp';
import Backdrop from '../backdrop/Backdrop';
import Modal from '../modal/Modal';
import { Job } from '../../utils/types';
import { Color } from 'chroma-js';

interface JobPosting {
  job: Job;
  bgColor: Color;
}
const JobPosting = ({ job, bgColor }: JobPosting) => {
  const [displayModal, setDisplayModal] = React.useState(false);
  React.useEffect(() => {
    console.log({ displayModal });
  }, []);
  const id = React.useId();
  return (
    <>
      <li
        className="relative cursor-pointer"
        onClick={() => setDisplayModal(true)}
      >
        <div
          style={{ backgroundColor: String(bgColor) }}
          className="px-20 py-4 mx-auto flex-col flex justify-center items-center h-[90px] w-[1200px] rounded-md list-none"
        >
          <img
            src={ProinLogo}
            alt="programadores e informaticos chile"
            className="absolute top-[15px] left-[17px]"
          />

          <div className="w-full flex justify-between ">
            <span className="font-bold">{job.charge}</span>
          </div>
          <div className="w-full grid grid-cols-3 justify-items-start">
            <div>
              <p>{job.business_name}</p>
            </div>
            <div>
              <div>
                {job.tecnologies.slice(0, 3).map((technology, idx) => (
                  <JobTag key={id + idx} technology={technology} />
                ))}
              </div>
            </div>
            <div className="justify-self-end">
              <p>
                {Number(
                  new Date(job.created_at)
                    .toLocaleDateString('es-CL')
                    .split('-')[0]
                ) - new Date().getDate()}
                d
              </p>
            </div>
          </div>
          <div className="w-full flex  justify-between">
            <div>
              <JobTag technology={job.mode} />
              <JobTag technology={job.salary} />
            </div>
          </div>
        </div>
      </li>
      {displayModal && (
        <>
          <Backdrop hideModal={() => setDisplayModal(false)} />
          <Modal hideModal={() => setDisplayModal(false)} job={job} />
        </>
      )}
    </>
  );
};

export default JobPosting;
