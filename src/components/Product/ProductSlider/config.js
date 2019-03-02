export const baseUrl =
    process.env.PUBLIC_URL === "production"
        ? "https://s3.amazonaws.com/static.neostack.com/img/react-slick"
        : "/productSlider-images/";