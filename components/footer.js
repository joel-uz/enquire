import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelegram,
  BsLinkedin,
} from "react-icons/bs";
import logo from "../public/enqlogo.png";
import name from "../public/name.png";
import qr from "../public/qrcode.png"


export default function Footer() {
  return (
    <div className={styles.box}>
        <hr className={styles.ruler}/>
        <br/>
        <div className={styles.row_box_collection}>

            <div className={styles.first_box}> 
            <Image src={logo} className={styles.imagelogo}/>
            <Image src={name} className={styles.imagelogo}/>
            <p className={styles.text}>
                Enquire Quiz Club, NITC <br/> NonProfit Organization
                <br/> The Quiz Club of NIT Calicut.
            </p>
            <span className={styles.additionals}>
                490 Quizzes Conducted <br/>
                32k+ daily site visitors
            </span>
            </div>

            <div className={styles.second_box}>
                <span className={styles.external_links}>CLUB</span>
                <span className={styles.external_links}>ABOUT US</span>
                <span className={styles.external_links}>BLOG</span>
                <span className={styles.external_links}>STATS</span> 
            </div>

            <div className={styles.third_box}>
                <span className={styles.text}>DONATE</span>
                <span className={styles.text}>www.patreon.com/enquire</span>
                <Image src={qr} className={styles.qrimage}/>
            </div>

            <div className={styles.last_box}>
                <span className={styles.external_links}>RESOURCES</span>
                <span className={styles.external_links}>FAQ</span>
                <span className={styles.external_links}>REPORT</span>
                <span className={styles.external_links}>COMMUNITY GUIDELINES</span> 
            </div> 
            
        </div>
        <br/>
        <div className={styles.ruler_combo}>
            <hr className={styles.ruler_twos}/>
            <hr className={styles.ruler_twos}/>
        </div>
        <br/>
        <div className={styles.end_content}>
            <div className={styles.left_content}> 
                <p className={styles.content}> COPYRIGHT 2003 </p>
                <div className={styles.terms}>
                    <span className={styles.terms}> TERMS</span>
                    <span className={styles.privacy}> PRIVACY</span>
                </div>
            </div>
            <div className={styles.right_content}>
                <p className={styles.contact}> CONTACT US</p>
                <div className={styles.icons}>
                    <Link href="https://facebook.com/profile.php?id=333141540396903">
                        <BsFacebook className={styles["logo"]} />
                    </Link>
                    <Link href="https://www.instagram.com/fosscellnitc/">
                        <BsInstagram className={styles["logo"]} />
                    </Link>
                    <Link href="https://twitter.com/fosscell">
                        <BsTwitter className={styles["logo"]} />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCwfNynjOSd3oPwIFqduJ9-Q">
                        <BsTelegram className={styles["logo"]} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/foss-cell-nitc/">
                        <BsLinkedin className={styles["logo"]}/>
                    </Link>
                </div>
            </div>    
        </div>
    </div>
  );
}
