import { Helmet } from "react-helmet";

const url = "https://www.diwali2021.netlify.app"

const MetaDecorator = ({ title, description, imgUrl, imgAlt }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={url + imgUrl} />
            <meta property="og:url" content={url + window.location.pathname + window.location.search} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={imgAlt}></meta>
        </Helmet>
    );
};

export default MetaDecorator;