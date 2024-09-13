import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  helpUrl: `Please refer to the 'Conventional Commits' section in the README.
    You can look at 'Conventional Commits' official docs: https://www.conventionalcommits.org/en/
    Here is popular cheat sheet: https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index`,
};

export default Configuration;
