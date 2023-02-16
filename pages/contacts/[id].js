import Head from "next/head";
import ContactInfo from "@/components/ContactInfo";

const Contact = ({contact}) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo text={contact}/>
    </>

)
export default Contact