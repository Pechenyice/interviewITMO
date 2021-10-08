import React, { useState } from "react";
import SVGManager from "../../../SVGManager";
import styles from './Disciplines.module.css';

const Disciplines = () => {

    const [accAlg, setAccAlg] = useState(false);

    function handleAccAlgToggle() {
        setAccAlg(!accAlg);
    }

    const [accMeh, setAccMeh] = useState(false);

    function handleAccMehToggle() {
        setAccMeh(!accMeh);
    }

    const [accForce, setAccForce] = useState(false);

    function handleAccForceToggle() {
        setAccForce(!accForce);
    }

    const [accFot, setAccFot] = useState(false);

    function handleAccFotToggle() {
        setAccFot(!accFot);
    }

    const [accRobot, setAccRobot] = useState(false);

    function handleAccRobotToggle() {
        setAccRobot(!accRobot);
    }

    return (
        <section>
            <h2 className={styles.discMain}>Дисциплины</h2>
            <div className={styles.accWrapper}>
                <div className={[styles.accElem, accAlg && styles.accElemActive].join(' ')} onClick={handleAccAlgToggle}>
                    <div className={styles.accHeader}>
                        <div className={styles.accName}>Алгоритмы</div>
                        <div className={[styles.accArrow, accAlg && styles.accArrowActive].join(' ')}>{SVGManager.getSVG('accArrow')}</div>
                    </div>
                    <div className={styles.accContent}>
                        <p>Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики.</p>
                    </div>
                </div>
                <div className={[styles.accElem, accMeh && styles.accElemActive].join(' ')} onClick={handleAccMehToggle}>
                    <div className={styles.accHeader}>
                        <div className={styles.accName}>Мехатроника</div>
                        <div className={[styles.accArrow, accMeh && styles.accArrowActive].join(' ')}>{SVGManager.getSVG('accArrow')}</div>
                    </div>
                    <div className={styles.accContent}>
                        <p>Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики.</p>
                    </div>
                </div>
                <div className={[styles.accElem, accForce && styles.accElemActive].join(' ')} onClick={handleAccForceToggle}>
                    <div className={styles.accHeader}>
                        <div className={styles.accName}>Силовые машины </div>
                        <div className={[styles.accArrow, accForce && styles.accArrowActive].join(' ')}>{SVGManager.getSVG('accArrow')}</div>
                    </div>
                    <div className={styles.accContent}>
                        <p>Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики.</p>
                    </div>
                </div>
                <div className={[styles.accElem, accFot && styles.accElemActive].join(' ')} onClick={handleAccFotToggle}>
                    <div className={styles.accHeader}>
                        <div className={styles.accName}>Фотоника и радиоэлектроника</div>
                        <div className={[styles.accArrow, accFot && styles.accArrowActive].join(' ')}>{SVGManager.getSVG('accArrow')}</div>
                    </div>
                    <div className={styles.accContent}>
                        <p>Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики.</p>
                    </div>
                </div>
                <div className={[styles.accElem, accRobot && styles.accElemActive].join(' ')} onClick={handleAccRobotToggle}>
                    <div className={styles.accHeader}>
                        <div className={styles.accName}>Робототехника</div>
                        <div className={[styles.accArrow, accRobot && styles.accArrowActive].join(' ')}>{SVGManager.getSVG('accArrow')}</div>
                    </div>
                    <div className={styles.accContent}>
                        <p>Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disciplines;
