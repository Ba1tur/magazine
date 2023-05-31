import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, Button,
} from '@chakra-ui/react'
import {useRouter} from "next/router";

const NoAcc = ({func}) => {

    const router = useRouter()

    return (
        <>
            <AlertDialog
                isOpen={func.isOpen}
                leastDestructiveRef={func.cancelRef}
                onClose={func.onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Внимание !
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Для добавления товара или посещения странницы необходимо авторизация !
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={func.cancelRef} onClick={func.onClose}>
                                Остаться
                            </Button>
                            <Button colorScheme='red' onClick={func.onClose} ml={3}>
                                <span style={{color: "white"}} onClick={() => router.push('/login')}>Авторизироваться</span>
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default NoAcc;