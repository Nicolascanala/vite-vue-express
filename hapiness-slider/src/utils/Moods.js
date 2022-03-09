import superHappy from "../assets/States/happyhead-5-super-happy-Icon/Happyhead/5-super-happy.svg";
import happy from "../assets/States/happyhead-4-pretty-happy-Icon/Happyhead/4-pretty-happy.svg";
import neutral from "../assets/States/happyhead-3-neutral-Icon/Happyhead/3-neutral.svg";
import sad from "../assets/States/happyhead-1-not-happy-Icon/Happyhead/1-not-happy.svg";
import superSad from "../assets/States/happyhead-0-not-happy-at-all-Icon/Happyhead/0-not-happy-at-all.svg";

const moods = [
  {
    mood: 1,
    name: "Super Sad",
    img: superSad,
  },
  {
    mood: 2,
    name: "Sad",
    img: sad,
  },
  {
    mood: 3,
    name: "Neutral",
    img: neutral,
  },
  {
    mood: 4,
    name: "Happy",
    img: happy,
  },
  {
    mood: 5,
    name: "Super Happy",
    img: superHappy,
  },
];

export default moods;
