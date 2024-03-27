export const copyToClipboard = async (text: string) =>
  navigator.permissions
    .query({ name: "clipboard-write" as PermissionName })
    .then(({ state }) => {
      if (state === "granted") navigator.clipboard.writeText(text);

      if (state === "denied") throw Error("Permission denied");
    });
