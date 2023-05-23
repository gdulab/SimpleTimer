import styles from './Timer.module.scss'

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}


let miliseconds = -1;
const Timer = props => {
    if (props.time === 0){miliseconds = -1};
    let seconds = Math.floor(props.time / 100);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    if (miliseconds % 99 === 0) {
        miliseconds = 0;
    }
    miliseconds += 1;
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 60;

    let milisecondsDigit = 0;
    if (miliseconds<10) {milisecondsDigit = '0'+ miliseconds} 
    else {milisecondsDigit = miliseconds};


    return (
        <div className={styles.timerDiv}>
            <span className={styles.timerDigits}>{padTo2Digits(hours)}:{padTo2Digits(minutes)}:{padTo2Digits(
        seconds)}.</span><span>{milisecondsDigit}</span>
        </div>
    )
}

export default Timer;