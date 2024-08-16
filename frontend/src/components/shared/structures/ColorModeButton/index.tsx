import { Icon } from "../../fragments/Icon";
import { useColorMode } from "../../providers/ColorModeProvider/useColorMode";
import styles from "./style.module.scss";

export function ColorModeButton() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <button
      className={styles.button}
      onClick={() =>
        setColorMode((colorMode) => (colorMode === "light" ? "dark" : "light"))
      }
    >
      {colorMode === "light" ? (
        <Icon icon="light_mode" />
      ) : (
        <Icon icon="dark_mode" />
      )}
    </button>
  );
}
