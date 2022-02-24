export default function formatTime(time){
    const sec = Math.floor(time / 1000 ) % 60;
    const min = Math.floor(time / 1000 / 60) % 60;
    const hrs = Math.floor(time / 1000 / 1000 / 60) % 60;
    return `${hrs} : ${min} : ${sec}`; 
}