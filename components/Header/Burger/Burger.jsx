import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Button, useDisclosure,
} from '@chakra-ui/react'
import {RxHamburgerMenu} from "react-icons/rx";
import Link from "next/link";
import h from "@/components/Header/Header.module.scss";

const Burger = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            <Button onClick={onOpen}>
                <RxHamburgerMenu/>
            </Button>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader borderBottomWidth='1px'>Необходимые ссылки</DrawerHeader>
                    <DrawerBody>
                        <div className={h.header__burger_list}>
                            <Link href="/" className={h.header__burger_item}>Главная</Link>
                            <Link href="/" className={h.header__burger_item}>О нас</Link>
                            <Link href="/" className={h.header__burger_item}>Контакты</Link>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Burger