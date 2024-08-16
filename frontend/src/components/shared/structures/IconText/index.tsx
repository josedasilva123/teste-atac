import { Text, TextColors, TextTags } from "../../fragments/_content/Text";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  tag: TextTags;
  textAlign?: "center" | "";
  textColor?: TextColors;
}

export function IconText({ children, icon, tag, textAlign, textColor }: Props) {
  return (
    <div
      className={`${styles.box} ${textColor === "white" ? styles.white : ""}`}
    >
      {icon}
      <Text tag={tag} textAlign={textAlign} textColor={textColor}>
        {children}
      </Text>
    </div>
  );
}
