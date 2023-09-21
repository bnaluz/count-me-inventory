'use client';

import Container from '../Container';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#B6D0E2] z-10 shadow-sm mb-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md-gap-0">
            <Logo />
            <div className="text-black">Another one</div>
            <div className="text-black">What else can i put here </div>
            <div className="text-black"> testing test</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
