import { Text, Flex } from "@chakra-ui/react";
import About from "../Infos/About";
import Features from "../Infos/Features";


const Info = () => {

    return (
        <>
            <Text>Info  2</Text>
            <Flex>
                <About />
                <Features />
            </Flex>
        </>
    )
}

export default Info;