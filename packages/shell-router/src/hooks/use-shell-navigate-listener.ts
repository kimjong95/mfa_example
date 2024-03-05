import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useShellNavigateListener() {
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigateListener = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      navigate(pathname);
    };

    window.addEventListener("[shell] navigate", shellNavigateListener);

    return () => {
      window.removeEventListener("[shell] navigate", shellNavigateListener);
    };
  }, [navigate]);
}
