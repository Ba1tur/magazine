import {Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";
import Link from "next/link";

const Links = () => {

    const grey = {
        color: "#969696",
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '14px'
    }

    return(
        <Breadcrumb fontWeight='medium' fontSize='sm'  mb={2}>
            <BreadcrumbItem>
                <Link href='/' style={grey}>Главная</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Link href='/' style={grey}>Гостинные</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Link href='/' style={grey}>Мягкая мебель</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Link href='/' style={grey}>Диваны</Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Links