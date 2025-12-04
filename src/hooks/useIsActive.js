import { useEffect, useState } from "react";

export default function useIsActive(initialValue, reset) {
  const [active, setActive] = useState(initialValue);

  function handleToggleIsActive() {
    setActive((prevActive) => !prevActive);
  }

  useEffect(() => {
    if (reset) {
      let timer;
      if (active) {
        timer = setTimeout(() => {
          handleToggleIsActive();
        }, 1000);
      }

      return () => {
        clearTimeout(timer);
      };
    }
  }, [active]);

  return {
    active,
    handleToggleIsActive,
  };
}
