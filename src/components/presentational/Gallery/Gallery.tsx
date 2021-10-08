import React, { useEffect, useState } from "react";
import SVGManager from "../../../SVGManager";
import styles from './Gallery.module.css';
import { CSSTransition } from 'react-transition-group';

interface ISlide {
    header: string,
    description: string,
}

const Gallery = () => {
    const gallery: ISlide[] = [
        {
            header: 'Началась подача документов',
            description: 'Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.'
        },
        {
            header: 'И сразу закончилась',
            description: 'Другой текст.'
        },
        {
            header: 'Заголовок 3',
            description: 'lorem ipsum dolor sit amet.'
        }
    ];

    const [slide, setSlide] = useState(0);

    function handleNewSlide(step: number) {
        return () => {
            setSlide(slide + step < 0 ? gallery.length - 1 : (slide + step) % gallery.length);
        }
    }

    return (
        <section className={styles.galleryWrapper}>
            <div className={styles.galleryContainer}>
                <button className={styles.galleryButton} onClick={handleNewSlide(-1)}>{SVGManager.getSVG('arrowLeft')}</button>
                <div className={styles.gallery}>
                    {
                        gallery.map((s, i) => <div key={i} style={{position: 'absolute'}}>
                            <CSSTransition in={i === slide} timeout={500} classNames="slideAnimation" unmountOnExit>
                                <div className={styles.gallerySlide}>
                                    <h1 className={styles.slideName}>{s.header}</h1>
                                    <p className={styles.slideDesc}>{s.description}</p>
                                    <button className={styles.slideButton}><p>Подробнее</p></button>
                                </div>
                            </CSSTransition>
                        </div>)
                    }
                </div>
                <button className={styles.galleryButton} onClick={handleNewSlide(1)}>{SVGManager.getSVG('arrowRight')}</button>
            </div>
        </section>
    );
}

export default Gallery;
