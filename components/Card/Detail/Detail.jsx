import {Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator} from '@chakra-ui/react'
import Character from "@/components/Card/Detail/Character/Character";


const Detail = () => {
    return (
        <Tabs position="relative" variant="unstyled">
            <TabList>
                <Tab>Характеристики</Tab>
                <Tab>Отзывы</Tab>
                <Tab>Доставка и оплата</Tab>
            </TabList>
            <TabIndicator
                mt="-1.5px"
                height="3px"
                bg="#245462"
                borderRadius="1px"
            />
            <TabPanels mt="27px">
                <TabPanel>
                    <Character/>
                </TabPanel>
                <TabPanel>
                    <p>Отзывы</p>
                </TabPanel>
                <TabPanel>
                    <p>Доставка и оплата</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
export default Detail