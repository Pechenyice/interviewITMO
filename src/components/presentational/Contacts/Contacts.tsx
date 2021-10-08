import React, { useState } from "react";
import SVGManager from "../../../SVGManager";
import styles from './Contacts.module.css';
import { CSSTransition } from 'react-transition-group';
import Modal from "../Modal/Modal";

const Contacts = () => {
    const [modal, setModal] = useState(false);

    function handleOpenModal(): void {
        setModal(true);
    }

    function handleCloseModal(): void {
        setModal(false);
    }

    return (
        <section>
            <CSSTransition in={modal} timeout={500} classNames="modal" unmountOnExit>
                <Modal onClick={handleCloseModal}/>
            </CSSTransition>
            <section className={styles.contactsWrapper}>
                <div className={styles.map}></div>
                <div className={styles.contactsContent}>
                    <div className={styles.contactsForm}>
                        <p className={styles.contactsMain}>Контакты</p>
                        <p className={styles.contactsDesc}>г. Санкт-Петербург, Кронверкский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)</p>
                        <p className={styles.contactsTel}>Тел: <a href="tel:+79315380170"><span className={styles.contactsTelSpan}>+7 (931) 538-01-70</span></a></p>
                        <button onClick={handleOpenModal} className={styles.buttonOuter}><div className={styles.buttonInner}>{SVGManager.getSVG('mail')}</div><p className={styles.buttonText}>Написать нам</p></button>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Contacts;
