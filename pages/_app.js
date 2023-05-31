import Layout from "@/components/Layout/Layout";

import {Provider} from "react-redux";
import store from "@/redux/store";
import { ChakraProvider } from '@chakra-ui/react'

import '@/styles/globals.css'
import '../styles/MainSlider.css'
import '../styles/CardSlider.scss'
import '@/styles/FilterOfCatalog.css'

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </Provider>
    )
}
