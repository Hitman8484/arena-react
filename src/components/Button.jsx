export default function Button(props) {

    return (
        <>
            <button style={{background: props.bgColor}}>{props.name}</button>
        </>
    )
}