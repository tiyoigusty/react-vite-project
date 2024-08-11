import { useState } from "react";

function useFollowFriend(follow:boolean|undefined) {
  const [isFollow, setIsFollow] = useState<boolean|undefined>(follow);

  const changeStatus = () => {
    setIsFollow(!isFollow);
  };

  return { isFollow, changeStatus };
}

export default useFollowFriend