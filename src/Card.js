
const style = {
    backgroundColor:'red',
    padding:'5px',
    margin:'5px',
    border:'1px solid gray',
    cursor:'move',
}

function Card({text}) {
    return <div style={style}>{text}</div>
}

export default Card;