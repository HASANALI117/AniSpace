import styles from "./styles.module.css";

import React from 'react'

export default function main() {
  return (
	<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn}>
					Logout
				</button>
			</nav>
		</div>
  )
}
