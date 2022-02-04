import styles from '../styles/CustomButton.module.scss'

const CustomButton = (props) => {
    return (
        <button className={`${props.style === 'black' ? styles.customBtnBlack : styles.customBtnBlue} ${styles.customBtn}`}>
            {props.text}
        </button>
    )
}

export default CustomButton