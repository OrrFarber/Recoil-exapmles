import Counter from "./Counter";
import Hey from "./Hey";
import { atom, selector, useRecoilValue } from "recoil";

export const hi = atom({
  key: "hi",
  default: "Recoil App ",
});

const listAtom = atom({
  key: "listAtom",
  default: [
    {
      name: "one",
      id: 1,
    },
    {
      name: "two",
      id: 2,
    },
  ],
});

const usersAtom = atom({
  key: "usersAtom",
  default: [
    {
      username: "userOne",
      userID: 1,
      kills: 45,
    },
    {
      username: "userTwo",
      userID: 2,
      kills: 37,
    },
  ],
});
const fullUser = selector({
  key: "fullUser",
  get: ({ get }) => {
    const list = get(listAtom);
    const users = get(usersAtom);

    return list.map((item) => {
      return {
        ...item,
        ...users.find((user) => user.userID === item.id),
      };
    });
  },
});

export default function App() {
  // {
  //     name : "one",
  //     username: "userOne"
  //     id: 1
  // }

  const mappedListState = useRecoilValue(fullUser);
  console.log("map", mappedListState);
  console.log(fullUser, "hhh");

  return (
    <div>
      <Counter />
      <hr />

      <Hey />
    </div>
  );
}
