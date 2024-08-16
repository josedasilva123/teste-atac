import { useColorMode } from "../../providers/ColorModeProvider/useColorMode";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
}

export function Template({ children }: Props) {
  const { colorMode } = useColorMode();

  return (
    <div className={colorMode === "dark" ? "dark" : ""}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
