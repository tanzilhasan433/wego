import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "phosphor-react";

const NavbarComponent = () => {
    return (
        <div>
            <Navbar fluid={true}>
              <Navbar.Container className="flex items-center justify-between">
                <Navbar.Brand>
                 <h1 className="text-2xl font-bold">Wego</h1>
                </Navbar.Brand>

                <Navbar.Container className="flex items-center gap-6">
                  <Navbar.Container
                    tag="ul"
                    className="lg:flex hidden items-center justify-between gap-4"
                  >
                    <TextInput
                      id="#id-10"
                      placeholder="Search anything"
                      color="gray"
                      sizing="sm"
                      type="text"
                      addon={<MagnifyingGlass size={20} color="#5E718D" />}
                      addonPosition="left"
                    />
                    <Navbar.Link
                      icon={<FacebookLogo size={20} color="#444" />}
                      iconAnimation={false}
                    />
                    <Navbar.Link
                      icon={<InstagramLogo size={20} color="#444" />}
                      iconAnimation={false}
                    />
                    <Navbar.Link
                      icon={<TwitterLogo size={20} color="#444" />}
                      iconAnimation={false}
                    />
                  </Navbar.Container>
                  <Navbar.Container className="flex gap-1">
                    <Navbar.Toggle className="block" />
                    Menu
                  </Navbar.Container>
                </Navbar.Container>
                <Navbar.Collapse
                  collapseType="sidebar"
                  className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
                >
                  <Navbar.Container tag="ul" className="flex flex-col gap-5">
                    <Navbar.Link
                      linkName="Home"
                      icon={<CaretDown size={20} />}
                      className="!py-0"
                    />
                    <Navbar.Link
                      linkName="Projects"
                      icon={<CaretDown size={20} />}
                      className="!py-0"
                    />
                    <Navbar.Link
                      linkName="Blogs"
                      icon={<CaretDown size={20} />}
                      className="!py-0"
                    />
                    <Navbar.Link linkName="News" className="!py-0" />
                    <Navbar.Link linkName="Resources" className="!py-0" />
                  </Navbar.Container>
                </Navbar.Collapse>
              </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;