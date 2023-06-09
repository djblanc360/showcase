import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase()
    // selectedPage comes from app component
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "dark-grey" : "dark-grey"}
                hover:text-red transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage)
                Window.dataLayer.push({'event': 'button-click'})
            }}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)')
    const navbarBackground = isTopOfPage ? 'text-earthy-brown' : 'bg-light-neutral'
    const navbarText = isTopOfPage ? 'bg-light-neutral' : 'text-earthy-brown'

    return (
        <nav className={`${navbarBackground} ${navbarText} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className='font-playfair text-3xl font-bold'>DB</h4>

                {/* DESKTOP NAVBAR */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-earthy-brown p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src="assets/menu-icon.svg" className="" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-tan w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src="assets/close-icon.svg" className="" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-earthy-brown">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}   

export default Navbar