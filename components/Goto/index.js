export default ({ top, id }) => {
    return (
        <a
            id={id}
            style={{
                display: 'block',
                position: 'relative',
                top: `-${top}px`,
                visibility: "hidden",
            }}
        />
    )
}