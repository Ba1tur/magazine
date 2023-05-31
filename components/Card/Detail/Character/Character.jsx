import c from './Character.module.scss'
import {character} from "@/contants/Character";

const Character = () => {

    return (
        <ul className={c.list}>
            {
                character.map(item => (
                    <li key={item.id} className={c.list__item}>
                        <span className={c.list__item_text}>
                            {item.title}
                        </span>

                        <span className={c.list__item_text}>
                            {item.desc}
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default Character