import * as React from "react";
import Spinner from "../images/Walk.gif";

export interface VisorDeItemsProps {
  data: Object[];
  render: Function;
  col:Boolean
}

const VisorDeItems: React.FunctionComponent<VisorDeItemsProps> = ({
  data,
  render,
}) => {
  if(data.length === 0) return   <div className="center-col">
  <img src={Spinner} alt="" />
  <span>No hay informacion...</span>
</div>
  return <ul className="center-col">{data.map((item) => render(item))}</ul>;
};

export default VisorDeItems;
