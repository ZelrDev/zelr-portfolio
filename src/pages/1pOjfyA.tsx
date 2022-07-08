import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "https://github.com/zelrdev/nav-blur";
  }, []);
  return <div>Loading</div>;
}
