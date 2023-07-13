import { Link } from "react-router-dom";

const styles = {
  header: `
    container
    flex flex-col md:flex-row md:justify-between md:items-center gap-10
    pt-[40px] md:pt-[100px]
  `,
  homeLinkBox: `
    w-fit flex gap-4 items-center
  `,
  link: `
    text-teal-700 text-4xl not-italic font-medium
  `,
  searchBox: `
    flex items-center gap-10
    w-full md:w-[352px]
  `,
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.homeLinkBox}>
        <Link to="/" className={styles.link}>
          home
        </Link>
      </div>
      <div className={styles.searchBox}>data</div>
    </header>
  );
}
