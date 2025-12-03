import Link from "next/link";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
            <Link 
                href="/"
                className="text-2xl font-bold text-pink-600 hover:text-purple-600 transition-colors duration-200"
            >
                CS 391 OAuth
            </Link>
        </header>
    );
}
