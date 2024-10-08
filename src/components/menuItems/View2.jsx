import { useSelector } from "react-redux"
import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import ProductFullCard from "./ProductFullCard"
import { responsiveStyleCreator } from "../../utils/ResponsiveControl"

const View2 = ({ categories, isMobile }) => {
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    return (
        <MSContainer
            style={responsiveStyleCreator(windowSize, styles.largeScreen.productColumn, styles.smallScreen.productColumn)}
        >
            <MSContainer
                style={{ ...styles.largeScreen.categoryBox, borderRadius: isMobile ? "" : "8px" }}>
                <MSText style={styles.largeScreen.categoryName}>
                    {categories.name}
                </MSText>
            </MSContainer>
            <MSContainer
                style={responsiveStyleCreator(windowSize, styles.largeScreen.cardContainer, styles.smallScreen.cardContainer)}
            >
                {
                    (categories.products).map((item, index) => (
                        <ProductFullCard
                            key={index}
                            item={item}
                        />
                    ))
                }
            </MSContainer>
        </MSContainer>
    )
}

export default View2

const styles = {
    largeScreen: {
        productColumn: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
        },
        categoryBox: {
            width: "100%",
            height: "48px",
            padding: "8px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40,
            backgroundColor: MSColorPalette.primary500,
        },
        categoryName: {
            color: MSColorPalette.white,
            fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
            fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
            fontSize: MSFonts.MerriweatherRegular200.fontSize,
        }
    },
    smallScreen: {
        productColumn: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
        },
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center",
            gap: "24px",
            padding: "0 12px"
        },
    }

}