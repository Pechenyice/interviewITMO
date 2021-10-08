import React from "react";
import SVGManager from "../../../SVGManager";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <section className={styles.footerMainWrapper}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBlock}>
                        <div className={styles.footerLogoContainer}>{SVGManager.getSVG('footerLogo')}</div>
                        <p className={styles.footerUnderLogo}>Информация © 1993–2020  Университет ИТМО Разработка © 2020 Управление по развитию и поддержке портала</p>
                    </div>
                    <div className={styles.footerblocksWrapper}>
                        <div className={styles.footerBlockLittle}>
                            <p>Страница ректора</p>
                            <p>Институты и факультеты</p>
                            <p>Библиотека</p>
                            <p>Издания Университета</p>
                            <p>Приемная комиссия</p>
                            <p>Расписание занятий</p>
                        </div>
                        <div className={styles.footerBlockLittle}>
                            <p>Страница ректора</p>
                            <p>Институты и факультеты</p>
                            <p>Библиотека</p>
                            <p>Издания Университета</p>
                            <p>Приемная комиссия</p>
                            <p>Расписание занятий</p>
                        </div>
                    </div>
                    <div className={styles.footerBlock}>
                        <p className={styles.footerUnderLogo}>г. Санкт-Петербург, Кронверкский пр., 49, <br/>ауд. 333 <br/>Тел: +7 (931) 538-01-70 <br/>E-mail: job@corp.ifmo.ru </p>
                        <div className={styles.footerLinks}>
                            <p>Мы в соцсетях:</p>
                            <div className={styles.footerSocial}>
                                {SVGManager.getSVG('footerVK')}
                                {SVGManager.getSVG('footerFA')}
                                {SVGManager.getSVG('footerTW')}
                                {SVGManager.getSVG('footerIN')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <aside className={styles.footerAsideWrapper}>
                <div className={styles.footerAsideContent}>
                    <p>Правила использования информации в доменной зоне ifmo.ru </p>
                    <p>Политика по обработке Персональных данных </p>
                </div>
            </aside>
        </footer>
    );
}

export default Footer;
