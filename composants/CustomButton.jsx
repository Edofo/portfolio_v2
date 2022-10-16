import styles from '@styles/CustomButton.module.scss'

const CustomButton = (props) => {
    return (
        <button action={props.action} className={`${props.style === 'black' ? styles.customBtnBlack : styles.customBtnBlue} ${styles.customBtn}`}>
            {props.text}
        </button>
    )
}

export default CustomButton