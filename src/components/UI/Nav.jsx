import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleLike = () => setIsLiked(!isLiked);
    const handleSearch = (e) => setSearchQuery(e.target.value);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const query = searchQuery.trim().toLowerCase();
            // Map of page names to routes (case-insensitive)
            const pageMap = {
                men: "/men",
                women: "/women",
                home: "/",
                about: "/about",
                login: "/login",
                // Optionally include bag names for direct navigation
                handbag: "/women/handbag",
                bagtothesea: "/women/bagtothesea",
                bagschool: "/women/bagschool",
                workbag: "/women/workbag",
                localbag: "/women/localbag",
                eventbag: "/women/eventbag",
                hikingbag: "/women/hikingbag",
                sportyslingbag: "/men/sportyslingbag",
                practicalmessengerbag: "/men/practicalmessengerbag",
                convenienttotebag: "/men/convenienttotebag",
                boxycrossbodybag: "/men/boxycrossbodybag",
            };

            // Check if the query matches a page name
            if (pageMap[query]) {
                navigate(pageMap[query]);
            } else {
                // Fallback to search route
                navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            }
        }
        setSearchQuery("");
    };

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "#ec4899" : "inherit",
        fontWeight: isActive ? "bold" : "normal",
        backgroundColor: isActive ? "rgba(255,255,255,0.1)" : "transparent",
    });

    const womenBags = [
        { name: "Handbag", desc: "A handled medium-to-large bag used to carry personal items like money, keys, and makeup; often with a shoulder strap for everyday elegance.", route: "handbag" },
        { name: "Bagtothesea", desc: "A durable cylindrical canvas bag inspired by sailors' seabags, ideal for beach trips or travel, holding clothes and gear securely.", route: "bagtothesea" },
        { name: "BagSchool", desc: "A sturdy bag designed for carrying books, supplies, and lunch to school, often with adjustable straps for comfort during daily commutes.", route: "bagschool" },
        { name: "Workbag", desc: "A practical bag for tools and materials, especially needlework or office essentials, featuring compartments for organized productivity.", route: "workbag" },
        { name: "Localbag", desc: "A versatile, eco-friendly reusable bag made from cloth or recycled materials, perfect for local shopping or casual outings with ample space.", route: "localbag" },
        { name: "Eventbag", desc: "A promotional swag or goodie bag filled with branded items at events, combining utility with memorable takeaways like totes or accessories.", route: "eventbag" },
        { name: "Hikingbag", desc: "A backpack-style pack (10-50L) with ventilation and straps for trails, carrying water, snacks, and gear for day hikes or overnights.", route: "hikingbag" },
    ];

    const menBags = [
        { name: "Sportyslingbag", desc: "A lightweight, crossbody bag with ergonomic straps for active use, featuring pockets for essentials during hikes or errands.", route: "sportyslingbag" },
        { name: "Practicalmessengerbag", desc: "A durable, flap-top bag with a long strap for crossbody wear, ideal for commuting with laptop sleeves and quick-access pockets.", route: "practicalmessengerbag" },
        { name: "Convenienttotebag", desc: "A large, open-top cloth bag with parallel handles for easy carrying of groceries, work items, or daily loads; reusable and spacious.", route: "convenienttotebag" },
        { name: "Boxycrossbodybag", desc: "A structured, rectangular bag worn diagonally across the body for hands-free convenience, with zip closure for security and style.", route: "boxycrossbodybag" },
    ];

    return (
        <header className="bg-gradient-to-r from-purple-300 via-pink-200 to-orange-200 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header with Title */}
                <div className="flex items-center justify-center h-16">
                    <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-200 drop-shadow-lg">
                        Make Confident With Your Style
                    </h1>
                </div>
                {/* Navbar */}
                <nav className="flex items-center justify-between h-16 bg-green-50 bg-opacity-80 rounded-xl shadow-xl px-6 lg:px-8 border border-white/20">
                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <NavLink
                                to="/"
                                className="text-amber-950 hover:text-yellow-200 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20 "
                                style={navLinkStyle}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="relative group">
                            <NavLink
                                to="/men"
                                className="text-amber-950 hover:text-yellow-200 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                                style={navLinkStyle}
                            >
                                Men
                            </NavLink>
                            <ul className="absolute left-0 mt-2 w-64 bg-green-50 rounded-lg shadow-xl border border-white/20 hidden group-hover:block z-20 p-2 space-y-1">
                                {menBags.map((bag) => (
                                    <li key={bag.name}>
                                        <NavLink
                                            to={`/men/${bag.route}`}
                                            className="block px-3 py-2 text-sm text-amber-950 hover:bg-white/20 hover:text-yellow-200 transition-all duration-300 rounded"
                                            style={navLinkStyle}
                                            title={bag.desc}
                                        >
                                            {bag.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="relative group">
                            <NavLink
                                to="/women"
                                className="text-amber-950 hover:text-yellow-200 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                                style={navLinkStyle}
                            >
                                Women
                            </NavLink>
                            <ul className="absolute left-0 mt-2 w-64 bg-green-50 rounded-lg shadow-xl border border-white/20 hidden group-hover:block z-20 p-2 space-y-1">
                                {womenBags.map((bag) => (
                                    <li key={bag.name}>
                                        <NavLink
                                            to={`/women/${bag.route}`}
                                            className="block px-3 py-2 text-sm text-amber-950 hover:bg-white/20 hover:text-yellow-200 transition-all duration-300 rounded"
                                            style={navLinkStyle}
                                            title={bag.desc}
                                        >
                                            {bag.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="text-amber-950 hover:text-yellow-200 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                                style={navLinkStyle}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className="text-amber-950 hover:text-yellow-200 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                                style={navLinkStyle}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>

                    {/* Right side: Search, Like Icon, and Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Search Input */}
                        <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearch}
                                placeholder="Search styles or pages..."
                                className="pl-10 pr-4 py-2 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 backdrop-blur-sm shadow-lg w-64 transition-all duration-300"
                            />
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </form>
                        {/* Search Icon Button for Mobile */}
                        <button
                            onClick={() => {
                                if (searchQuery.trim()) {
                                    const query = searchQuery.trim().toLowerCase();
                                    const pageMap = {
                                        men: "/men",
                                        women: "/women",
                                        home: "/",
                                        about: "/about",
                                        login: "/login",
                                        handbag: "/women/handbag",
                                        bagtothesea: "/women/bagtothesea",
                                        bagschool: "/women/bagschool",
                                        workbag: "/women/workbag",
                                        localbag: "/women/localbag",
                                        eventbag: "/women/eventbag",
                                        hikingbag: "/women/hikingbag",
                                        sportyslingbag: "/men/sportyslingbag",
                                        practicalmessengerbag: "/men/practicalmessengerbag",
                                        convenienttotebag: "/men/convenienttotebag",
                                        boxycrossbodybag: "/men/boxycrossbodybag",
                                    };
                                    navigate(pageMap[query] || `/search?q=${encodeURIComponent(searchQuery)}`);
                                } else {
                                    navigate('/search');
                                }
                            }}
                            className="md:hidden p-2 text-blue-950 hover:text-yellow-200 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none shadow-lg hover:shadow-xl bg-white/20"
                            aria-label="Search"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Like Icon */}
                        <button
                            onClick={toggleLike}
                            className="p-2 text-blue-950 hover:text-red-300 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none shadow-lg hover:shadow-xl bg-white/20"
                            aria-label="Toggle like"
                        >
                            <svg
                                className="w-6 h-6"
                                fill={isLiked ? "#ef4444" : "none"}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-amber-700 focus:outline-none rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl bg-white/20"
                                aria-label="Toggle navigation menu"
                            >
                                <svg
                                    className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Mobile Menu (visible when toggled) */}
                <div
                    className={`md:hidden ${isOpen ? "block" : "hidden"} bg-green-50 rounded-xl shadow-2xl absolute top-32 left-0 w-full z-10 border border-white/20`}
                >
                    <div className="flex flex-col items-center space-y-4 py-6 px-6">
                        <NavLink
                            to="/"
                            onClick={toggleMenu}
                            className="text-shadow-orange-950 hover:text-yellow-200 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                            style={navLinkStyle}
                        >
                            Home
                        </NavLink>
                        <div className="w-full">
                            <NavLink
                                to="/men"
                                onClick={toggleMenu}
                                className="text-shadow-orange-950 hover:text-yellow-200 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                                style={navLinkStyle}
                            >
                                Men
                            </NavLink>
                            <div className="pl-6 space-y-2 text-xs text-shadow-orange-950">
                                {menBags.map((bag) => (
                                    <div key={bag.name}>
                                        <NavLink
                                            to={`/men/${bag.route}`}
                                            onClick={toggleMenu}
                                            className="block w-full py-1 transition-all duration-300 hover:text-yellow-200"
                                            style={navLinkStyle}
                                        >
                                            {bag.name}
                                        </NavLink>
                                        <p className="text-blue-800 text-left">{bag.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full">
                            <NavLink
                                to="/women"
                                onClick={toggleMenu}
                                className="text-shadow-orange-950 hover:text-yellow-200 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                                style={navLinkStyle}
                            >
                                Women
                            </NavLink>
                            <div className="pl-6 space-y-2 text-xs text-shadow-orange-950">
                                {womenBags.map((bag) => (
                                    <div key={bag.name}>
                                        <NavLink
                                            to={`/women/${bag.route}`}
                                            onClick={toggleMenu}
                                            className="block w-full py-1 transition-all duration-300 hover:text-yellow-200"
                                            style={navLinkStyle}
                                        >
                                            {bag.name}
                                        </NavLink>
                                        <p className="text-blue-800 text-left">{bag.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <NavLink
                            to="/about"
                            onClick={toggleMenu}
                            className="text-shadow-orange-950 hover:text-yellow-200 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                            style={navLinkStyle}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={toggleMenu}
                            className="text-shadow-orange-950 hover:text-yellow-200 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                            style={navLinkStyle}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/search"
                            onClick={toggleMenu}
                            className="text-shadow-orange-950 hover:text-yellow-200 w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                            style={navLinkStyle}
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;