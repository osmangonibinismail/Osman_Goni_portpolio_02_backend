import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";


export default function Header() {

    return <>
        <aside className="asideleft active">
            <ul>
                <Link href='/'>
                    <li className="navactive">
                        <IoHome />
                    </li>
                </Link>
                <li className="navactive flex-col flex-left">
                    <div className="flex gap-1">
                        <sPostcard />
                        <span>Blogs</span>
                    </div>
                </li>
            </ul>
        </aside>
    </>
}