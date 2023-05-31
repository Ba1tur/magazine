import h from "@/components/Header/Header.module.scss";
import {BiSearch} from "react-icons/bi";

const Search = () => {
    return (
        <label className={h.header__label}>
            <span className={h.header__label_icon}>
                <BiSearch size={20}/>
            </span>
            <input type="text" className={h.header__label_input} placeholder="Поиск"/>
        </label>
    )
}

export default Search