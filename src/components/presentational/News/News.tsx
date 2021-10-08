import React, { useEffect } from "react";
import SVGManager from "../../../SVGManager";
import styles from './News.module.css';

interface INewsInfo {
    isLoading: boolean,
    isFetched: boolean,
    content: INews[]
}

interface INews {
    id: number,
    description: string,
    creation: Date,
    img: string 
}

const News = ({newsInfo, onNeedLoadNews} : {newsInfo: INewsInfo, onNeedLoadNews: any}) => {
    const news = newsInfo?.content || [];
    useEffect(() => {
        if (!newsInfo?.isLoading && !newsInfo?.isFetched) onNeedLoadNews();
    }, []);

    function getHumanizedMonth(n: number) {
		const monthNames = [
			"января",
			"февраля",
			"марта",
			"апреля",
			"мая",
			"июня",
			"июля",
			"августа",
			"сентября",
			"октября",
			"ноября",
			"декабря",
		];

		return monthNames[n];
	}

	function humanizeDate(dt: Date) : string {
		return `${dt.getDate()} ${getHumanizedMonth(
			dt.getMonth()
		)} ${dt.getFullYear()}`;
	}

    return (
        <section className={styles.newsWrapper}>
            <h2 className={styles.newsMain}>
                Новости и события
            </h2>
            <div className={styles.newsContentWrapper}>
                {
                    news.length ? news.map(n => <div className={styles.newsElem} key={n.id}>
                        <div className={styles.newsBack}><img src={n.img}></img></div>
                        <div className={styles.newsContent}>
                            <div className={styles.newsService}>
                                <p className={styles.newsDate}>{humanizeDate(n.creation)}</p>
                                <div className={styles.serviceInfo}>
                                    {SVGManager.getSVG('vk')}
                                    <p>Вконтакте</p>
                                </div>
                            </div>
                            <div className={styles.newsDesc}><p>{n.description}</p></div>
                        </div>
                    </div>) :
                    <>
                        <div className={styles.skeleton}><div className={styles.skeletonAnim}></div><div className={styles.skeletonMain}></div><div className={styles.skeletonSecond}></div><div className={styles.skeletonThird}></div><div className={styles.skeletonFourth}></div></div>
                        <div className={styles.skeleton}><div className={styles.skeletonAnim}></div><div className={styles.skeletonMain}></div><div className={styles.skeletonSecond}></div><div className={styles.skeletonThird}></div><div className={styles.skeletonFourth}></div></div>
                        <div className={styles.skeleton}><div className={styles.skeletonAnim}></div><div className={styles.skeletonMain}></div><div className={styles.skeletonSecond}></div><div className={styles.skeletonThird}></div><div className={styles.skeletonFourth}></div></div>
                        <div className={styles.skeleton}><div className={styles.skeletonAnim}></div><div className={styles.skeletonMain}></div><div className={styles.skeletonSecond}></div><div className={styles.skeletonThird}></div><div className={styles.skeletonFourth}></div></div>
                        <div className={styles.skeleton}><div className={styles.skeletonAnim}></div><div className={styles.skeletonMain}></div><div className={styles.skeletonSecond}></div><div className={styles.skeletonThird}></div><div className={styles.skeletonFourth}></div></div>
                        <div className={styles.skeleton}><div className={styles.skeletonAnim}></div><div className={styles.skeletonMain}></div><div className={styles.skeletonSecond}></div><div className={styles.skeletonThird}></div><div className={styles.skeletonFourth}></div></div>
                    </>
                }
            </div>
        </section>
    );
}

export default News;
