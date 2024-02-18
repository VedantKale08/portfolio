import StudyNex from "@/assets/study.png";
import Chat from "@/assets/chat.png";
import VsCode from "@/assets/vscode.png";
import Meet from "@/assets/meet.png";

const project_json = [
  {
    id: 1,
    title: "Study Nex - A virtual classroom",
    description:
      "StudyNex....as the name suggests is the next generation virtual group study platform designed for the students by the students. ",
    link: "https://github.com/VedantKale08/StudyNex---Frontend",
    icon: StudyNex,
  },
  {
    id: 2,
    title: "Online Vs Code",
    description:
      "Designed and implemented a vs code clone, with NextJs, Typescript, Monaco Code editor and Judge0 api for compilation of codes.",
    link: "https://github.com/VedantKale08/Online-Vs-Code---frontend",
    icon: VsCode,
  },
  {
    id: 3,
    title: "Meet and Streaming",
    description:
      "With the help of socket.io, peerJs and webRTC, I have created a video meet app where multiple users can meet and talk",
    link: "https://github.com/VedantKale08/Video-Streaming-Meet-frontend",
    icon: Meet,
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "Created a MENN stack, with NextJs chat application and integrated real time communication through socket.io",
    link: "https://github.com/VedantKale08/chat-app-frontend",
    icon: Chat,
  },
];

module.exports = project_json;
