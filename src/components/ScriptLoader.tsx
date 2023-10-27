import { useEffect } from "react";

type Props = {
  src: string;
};

export default ({ src }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return null;
};
