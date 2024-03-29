import React, { useEffect, useState } from 'react'
import { MSColorPalette, MSFonts } from '../../assets/ui';
import NavbarLogoSVG from '../../assets/svg/NavbarLogoSVG';
import { MSContainer, MSLink, MSText } from '..';
import { SVGLogOut } from '../../assets/svg';
import { Paths } from '../../enums/Paths';
import { localize } from '../../localization/localize';

export const Navbar = () => {
    //#region useStates
    const [activeLink, setActiveLink] = useState("");
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    //#endregion

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleSize)
        return () => window.removeEventListener("resize", handleSize)
    }, [])

    return (
        <MSContainer style={navbar}>
            <MSContainer style={navItems}>
                <MSLink to={Paths.DEFAULT} style={logo}>
                    <NavbarLogoSVG />
                    <MSText style={logoText}>MENUSPOT</MSText>
                </MSLink>
                <MSContainer style={features}>
                    <MSLink to={Paths.ABOUT_US} style={link}>{localize("About Us")}</MSLink>
                    <MSLink to={Paths.MENU} style={link}>{localize("Menus")}</MSLink>
                    <MSContainer style={link}>{localize("Options")}</MSContainer>
                    <MSContainer style={logOut}><SVGLogOut /></MSContainer>
                </MSContainer>
            </MSContainer>
        </MSContainer >
    )
}

//#region large device styles
const navbar = {
    width: "100%",
    padding: "10px 190px", //burada 190px yerine 12vw yazılabilir. Responsive uygun ayarlanıyor.
    backgroundColor: MSColorPalette.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const navItems = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
}
const logo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none"
}
const logoText = {
    marginTop: "12px",
    marginLeft: "5px",
    color: MSColorPalette.brandName,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
}
const features = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
}
const link = {
    textDecoration: "none",
    padding: "10px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
    lineHeight: "16px",
}
const logOut = {
    cursor: "pointer"
}
export default Navbar