import Document, { Head, Html, Main, NextScript } from "next/document"

class CustomDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" />
                    <link rel='shortcut icon' href='/static/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument