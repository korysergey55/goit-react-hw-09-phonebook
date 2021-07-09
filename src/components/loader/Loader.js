import React from 'react';
import Load from "react-loader-spinner";

const Loader = () => {
    return (
     <div className="loader">
      <Load
       type="Circles"
       color="#05a8df"
       height={70}
       width={70}
       timeout={1000}
      />
     </div>
    );
}

export default Loader;