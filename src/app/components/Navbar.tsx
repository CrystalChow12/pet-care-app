import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-2 py-3">
      <div className="">
        <img src="/logo.png" alt="clinic logo" width="100px" height="100px" />
      </div>

      <div className="flex gap-8 justify-center items-center">
        <Link href="/" aria-label="Home page">
          Home
        </Link> 

        <Link href="/Owners" aria-label="Pet owners page">
          Pet Owners
        </Link>

        <Link href="/patient" aria-label="Patients page">
          Patients
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
