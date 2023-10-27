import { HelmetProvider } from "react-helmet-async";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Layout;
