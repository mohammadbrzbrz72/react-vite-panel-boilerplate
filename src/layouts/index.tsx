import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const styles = {
  main: `
    min-h-screen w-full
    overflow-x-hidden 
    relative
    pb-20
  `,
  container: `
    container
    mt-[50px]
  `,
  img: `
    w-[100vw] md:w-[60%] h-[100vh]
    absolute left-[-50px] top-[0px]
    object-cover
  `,
};

export default function Layout() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
