import React from "react";
import VideoCard from "@/components/ui/videoCard";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
interface VideoSrc {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

async function fetchVideos(): Promise<VideoSrc[]> {
  // a json-server should be started on port 4000 to serve the video urls
  const response = await fetch("http://localhost:4000/videos");
  console.log(response);

  return response.json();
}
const VideoPage = async () => {
  const videos = await fetchVideos();
  return (
    <div className="bg-slate-600 pt-6 flex flex-col items-center justify-center px-4 sm:px-0">
      <h1 className="text-4xl text-white mb-8 text-center">Video Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <Card key={index} className="bg-white p-4 rounded shadow">
            <CardTitle className="text-xl font-bold">{video.title}</CardTitle>
            {/* <CardDescription className="text-gray-600">
              {video.description}
            </CardDescription> */}
            <CardContent>
              {video.sources.map((source, sourceIndex) => (
                <VideoCard sourceIndex={sourceIndex + index} src={source} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
