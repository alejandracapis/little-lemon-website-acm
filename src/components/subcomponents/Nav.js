import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowScroll } from '@uidotdev/usehooks';

export default function Nav() {
    const [{ x, y }, scrollTo] = useWindowScroll();

        const styleLink = {
            color: 'black',
            fontWeight: 'bolder',
            fontFamily: '"karla", sans-serif',
            fontSize: 'calc(0.5vw + 0.5vh)'
        }

        const styleNavbar = {
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '2%',
            textAlign: 'center',
            justifyContent: 'space-evenly'
        }

        const styleButtonScroll = {
            border: 'none',
            backgroundColor: 'white',
            textDecoration: 'underline',
            color: 'black',
            fontWeight: 'bolder',
            fontFamily: '"karla", sans-serif',
            fontSize: 'calc(0.5vw + 0.5vh)'
        }

        return (
            <nav>
                <ul style={styleNavbar}>
                    <li>
                        <NavLink to='/' style={styleLink}>Home</NavLink>
                    </li>
                    <li>
                        <button style={styleButtonScroll}
                            onClick={() => scrollTo(0,500)}
                        >
                            Menu
                        </button>

                    </li>
                    <li>
                        <button style={styleButtonScroll} onClick={() => scrollTo(0,1400)}>
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button style={styleButtonScroll} onClick={() => scrollTo(0,1900)}>
                            About
                        </button>
                    </li>
                    <li>
                        <NavLink to='/booking' style={styleLink}>
                            Reservations
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
