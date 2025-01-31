import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className=" flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer hover:font-bold transition-all pb-1.5"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
            </div>
            <Image src={"menu.svg"} width={32} height={32} alt="menu" className="lg:hidden inline-block" />
        </nav>
    );
};

export default Navbar;
