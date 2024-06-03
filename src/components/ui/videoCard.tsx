import React from "react";
type propsType = {
  src: string;
  sourceIndex: number;
};

const VideoCard = (props: propsType) => {
  return (
    <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-md">
      <video controls className="w-full sm:max-w-md max-h-64">
        <source key={props.sourceIndex} src={props.src} />
      </video>
    </div>
  );
};

export default VideoCard;
