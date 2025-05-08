import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup(async (monaco) => {
  return {
    editorOptions: {
      wordWrap: "on",
      readOnly: true,
    },
    additionalOptions: {
      theme: "vs-dark",
    },
  };
});
