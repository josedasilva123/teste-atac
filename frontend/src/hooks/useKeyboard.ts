import { useEffect, useRef, useState } from "react";

export const useKeyboard = <Element>(keyIdentifier: string | number) => {
  const ref = useRef<Element>(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (keyIdentifier == event.key) {
        event.preventDefault();
        event.stopPropagation();
        const current = ref.current as HTMLElement;
        current.click();
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 300);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keyIdentifier]);

  return { ref, clicked };
};
