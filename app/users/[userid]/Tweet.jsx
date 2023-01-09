"use client";

import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HartIconFilled } from "@heroicons/react/24/solid";

const Tweet = ({ tweet }) => {
  const [numberOflikes, setNumberOfLikes] = useState(tweet?.numberOflikes);
  const [liked, setLiked] = useState(null);

  useEffect(() => {
    if (liked === null) return;

    const endpoint = liked
      ? `/api/tweets/${tweet.id}/like`
      : `/api/tweets/${tweet.id}/unlike`;

    fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ tweet }) => {
        setNumberOfLikes(tweet?.numberOflikes);
      });
  }, [liked]);

  const handleClick = () => setLiked((liked) => !liked);

  return (
    <li className="my-4 rounded bg-stone-200 p-4 text-stone-600">
      <div className="flex justify-between">
        <p>{tweet.body}</p>
        <button onClick={handleClick}>
          {liked ? (
            <HartIconFilled className="w-7 h-7 text-red-500" />
          ) : (
            <HeartIcon className="w-7 h-7 text-red-500" />
          )}
        </button>
        <span className="text-sm">{numberOflikes}</span>
      </div>
    </li>
  );
};

export default Tweet;
