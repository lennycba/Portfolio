import Script from 'next/script'
import styles from './Calendly.module.css'
const Calendly = ({ type }) => {
    const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
    const showDetails = process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "false" ? 1 : 0;
    const showCookies = process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;

    return (
        <div className={styles.mainContainer} id='meeting'>
            
            <div className={styles.calendlyContainer}>
                <div
                    className={`calendly-inline-widget w-screen h-screen ${styles.calendly}`} data-url={`https://calendly.com/${username}${type ? `/${type}` : ''}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}></div>
            </div>

            <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
    )
}

export default Calendly