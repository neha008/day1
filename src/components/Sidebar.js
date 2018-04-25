import React from 'react';

const Sidebar = (props) => {

    return (
        <div className="sidebar" >
   <div className="d-flex flex-row">
  <div className="p-2"><button type="button" className="btn btn-primary" >Home</button></div>
  <div className="p-2"><button type="button" className="btn btn-primary" onClick={props.handlePortal}
            disabled={!props.enable}>Portal</button></div>

</div>
        </div>
    )

}

export default Sidebar;

