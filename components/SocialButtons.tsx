import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'

import styles from '../styles/SocialButtons.module.css'

function SocialButtons() {
    return (
        <div className={styles.socialButtons}>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/nikita-belousov-730199202/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.button}
                        title="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/sorfeai"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.button}
                        title="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialButtons