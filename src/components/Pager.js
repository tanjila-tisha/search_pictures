import React from 'react';
import '../App.css';

const Pager = (props) =>{
    return (<div className="pager">
                {props.maxPageNo > 1 && (<div> 
                {props.pageNo > 1 && <span className="pager-text" onClick={()=>props.goToPage(props.pageNo - 1)}> Previous </span>}
                {props.pageNo}
                {props.pageNo < props.maxPageNo  && <span className="pager-text" onClick={()=>props.goToPage(props.pageNo + 1)}> Next </span>}
                </div>)}
      </div>);
};

export default Pager;