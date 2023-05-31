import f from './Footer.module.scss'
import {BiPhone} from "react-icons/bi";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={f.footer}>
            <div className="container">
                <div className={f.footer__content}>

                    <div className={f.footer__left}>
                        <p className={f.footer__subtitle}>
                            НАВИГАЦИЯ
                        </p>

                        <div className={f.footer__left_box}>
                            <div className={f.footer__left_list}>
                                <p className={f.footer__left_item}>
                                    Кухни
                                </p>

                                <p className={f.footer__left_item}>
                                    Спальни
                                </p>

                                <p className={f.footer__left_item}>
                                    Гостинные
                                </p>
                            </div>

                            <div className={f.footer__left_list}>
                                <p className={f.footer__left_item}>
                                    Прихожие
                                </p>

                                <p className={f.footer__left_item}>
                                    Офисная мебель
                                </p>

                                <p className={f.footer__left_item}>
                                    Детская
                                </p>
                            </div>

                            <div className={f.footer__left_list}>
                                <p className={f.footer__left_item}>
                                    Шкафы
                                </p>

                                <p className={f.footer__left_item}>
                                    Матрасы
                                </p>

                                <p className={f.footer__left_item}>
                                    Мягкая мебель
                                </p>
                            </div>
                        </div>

                        <div className={f.footer__left_items}>
                            <p className={f.footer__left_items_link}>
                                Акция
                            </p>

                            <p className={f.footer__left_items_link}>
                                Новинки
                            </p>
                        </div>
                    </div>

                    <div className={f.footer__right}>

                        <p className={f.footer__logo}>
                            LM
                        </p>

                        <div className={f.footer__address}>
                            г. Анапа, Анапское шоссе, <br/>
                            30 Ж/К Черное море
                        </div>

                        <div className={f.footer__social}>
                            <p className={f.footer__social_text}>
                                <BiPhone size={20}/>
                                8 (964) 89 99 119
                            </p>

                            <p className={f.footer__social_text}>
                                <AiOutlineInstagram size={20}/>
                                INSTAGRAM
                            </p>

                            <p className={f.footer__social_text}>
                                <AiOutlineMail size={20}/>
                                mebel_loft_anapa@mail.ru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;