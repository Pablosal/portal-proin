import * as React from 'react';
interface JobTagProps {
  technology: string | number;
}
const JobTag = ({ technology }: JobTagProps) => {
  console.log(technology);
  
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
      {technology}
    </span>
  );
};

export default JobTag;
