import axios from "axios";

import { VideoCard, NoResults } from "../components";
import { BASE_URL } from "../utils";
import { Video } from "../types";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        ))
      ) : (
        <NoResults text={`No Videos`} />
      )}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);
  return {
    props: { videos: data },
  };
};
