/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSession } from "next-auth/react";

const VideoModal = ({ isOpen, onRequestClose, videoId }) => {
  const { data: session } = useSession();
  const [videoUrl, setVideoUrl] = useState("");
  //   useEffect(() => {
  //     if (session && videoId) {
  //       fetch(
  //         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=player&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${session.accessToken}`,
  //           },
  //         }
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           if (data.items && data.items.length > 0) {
  //             setVideoUrl(data.items[0].player.embedHtml);
  //           } else {
  //             console.error("Failed to fetch video data:", data);
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching video:", error);
  //         });
  //     }
  //   }, [session, videoId]);

  useEffect(() => {
    if (videoId) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/openAI/youtube/${videoId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setVideoUrl(data.player.embedHtml);
          } else {
            console.error("Failed to fetch video data:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching video:", error);
        });
    }
  }, [videoId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "640px",
          height: "auto",
        },
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: videoUrl }} />
    </Modal>
  );
};

export default VideoModal;
