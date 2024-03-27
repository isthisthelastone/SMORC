import { createEffect, createEvent, createStore, sample } from "effector";

export const $inputValue = createStore<string | null>(null);
export const setInputValue = createEvent<string>();

sample({
  clock: setInputValue,
  target: $inputValue,
});

export const walletDataRequested = createEvent();

const fetchDataFx = createEffect(async (wallet: string) => {
  const response = await fetch(`https://api.smorc.io/allocation/${wallet}`);
  const data = await response.json();
  return data;
});

sample({
  clock: walletDataRequested,
  source: $inputValue,
  filter: (item) => Boolean(item) && item.length > 30,
  target: fetchDataFx,
});
