import { createEffect, createEvent, createStore, sample } from "effector";
import { UserData } from "../view/stats-with-footer.tsx";

export const init = createEvent();

export const $userData = createStore<Array<Record<string, any>>>([]);

const fetchContributorsFx = createEffect(async () => {
  const response = await fetch(`https://api.smorc.io/all_transfers`);
  const data = await response.json();
  const usersArray: UserData[] = Object.entries(data).map(
    ([wallet, userInfo]) => ({
      wallet,
      //@ts-expect-error впадлу
      ...userInfo,
    }),
  );
  return usersArray;
});

sample({
  clock: init,
  target: fetchContributorsFx,
});

sample({
  clock: fetchContributorsFx.doneData,
  target: $userData,
});
