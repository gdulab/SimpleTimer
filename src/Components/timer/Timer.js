import styles from './Timer.module.scss'

const msToTime = (time) => {
    let msecs = Math.floor(time);
    msecs = msecs % 100;
    let secs = Math.floor(time / 100);
    secs = secs % 60;
    let mins = Math.floor(time/60/100)
    mins = mins % 60;
    const hours = Math.floor(time/60/60/100);
    return [hours, mins, secs, msecs].map(item => item <10 ? '0' + item:item).join(':');
}

const Timer = props => {
    return (
        <div className={styles.timerDiv}>
            <span className={styles.timerDigits}>{msToTime(props.time)}</span>
        </div>
    )
}

export default Timer;