import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Job Management- ${title}`;
  }, [title]);
};

export default useTitle;
