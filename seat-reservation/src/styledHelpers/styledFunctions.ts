import Styles from "./Styles";

export const cannotSelect = (): Styles => {
  return {
    userSelect: `none`,
    mozUserSelect: `none`,
    webkitUserSelect: `none`,
  };
};
