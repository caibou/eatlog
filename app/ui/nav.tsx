
export default function NavBar() {
    var isOpen = false;
    var menuOne = false;

    return (
            <div className="hidden h-auto w-screen bg-black text-white">
                <nav
                    className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0"
                >
                    <div
                        className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20"
                    >
                        <a href="#">
                            <img
                                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26c_%5BA%5D--Navbar%20Brand.png"
                                alt=""
                                className="inline-block max-h-6"
                            />
                        </a>
                        <div
                            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${'show'
                                }`}
                        >
                            <div className="relative flex flex-col">
                                <a
                                    href="#"
                                    className={`flex flex-row rounded-lg hover:text-[#c9fd02] lg:px-6 lg:py-4 ${menuOne ? ' text-[#c9fd02] ' : 'text-white  '
                                        }`}
                                >
                                    Product
                                </a>
                            </div>
                            <a
                                href="#"
                                className="font-inter rounded-lg hover:text-[#c9fd02] lg:px-6 lg:py-4"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="font-inter rounded-lg hover:text-[#c9fd02] lg:px-6 lg:py-4"
                            >
                                AboutUs
                            </a>
                            <a
                                href="#"
                                className="font-inter rounded-lg pb-8 hover:text-[#c9fd02] lg:px-6 lg:py-4 lg:pb-0"
                            >
                                FAQs
                            </a>
                        </div>
                        <div
                            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? 'show' : 'hidden'
                                }`}
                        >
                            <a
                                target="_blank"
                                className="inline-block rounded-full bg-white px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-[#c9fd02]"
                            >
                                Get Started
                            </a>
                        </div>
                        <a
                            href="#"
                            className="absolute right-5 lg:hidden"
                        >
                            <svg
                                width="1.25rem"
                                height="1rem"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
    );
}
