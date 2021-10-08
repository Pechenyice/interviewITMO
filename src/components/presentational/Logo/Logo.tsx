import React from "react";
import SVGManager from "../../../SVGManager";
import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={styles.logoWrapper}>
			{SVGManager.getSVG('logo')}
		</div>
	);
};

export default Logo;
