import { NextPage } from "next";
import Image from "next/image";

import styles from '../styles/About.module.css'
import me from '../public/images/me.png'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Hi! My name is Nikita</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis maxime, aliquid porro iste modi incidunt ut veritatis odit, necessitatibus adipisci! Corrupti necessitatibus nemo similique sequi? Facilis dolore quam, voluptates dolor enim nobis quasi quos temporibus ut saepe veniam non exercitationem possimus at tenetur quidem, quod eos omnis recusandae, voluptatibus consequuntur rerum iste? Architecto accusantium mollitia odit placeat aliquam laborum dignissimos nemo iste officiis eaque numquam dolor fugiat a, nobis quisquam tenetur hic. Ad deserunt nesciunt natus quia expedita nulla architecto aliquid est, cumque culpa accusamus fugiat temporibus voluptate quisquam sed iusto, cupiditate ducimus ab quos sequi sit, similique quasi?
                </p>
            </div>
            <div className={styles.meImage}>
                <Image src={me} placeholder="blur" priority layout="responsive" alt="Photo of myself" />
            </div>
        </div>
    );
};

export default About;