import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ( {children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/skill"><a>Skill</a></Link>
                <Link href="/career"><a>Career</a></Link>
                <Link href="/projects"><a>Projects</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
};

export default AppLayout;