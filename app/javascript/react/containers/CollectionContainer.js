import React from "react";
import CollectionIndexComponent from "../components/CollectionIndexComponent";
import PhotoShowComponent from "../components/PhotoShowComponent";

const CollectionContainer = (props) => {
  return (
    <div>
      <CollectionIndexComponent />
      <PhotoShowComponent props={props}/>
    </div>
  );
};

export default CollectionContainer;
