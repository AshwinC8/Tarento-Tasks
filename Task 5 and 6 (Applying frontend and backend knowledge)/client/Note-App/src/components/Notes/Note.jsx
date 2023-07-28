function Note({noteInfo, index}){
    return (
        <div 
            className="card"
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                minWidth: "200px",
                height: "auto",
                borderRadius: "25px",
                borderWidth: "5px",
                borderStyle: "solid",
                backgroundColor: "#322653",
                // paddingLeft: "15px",
                fontSize: "1em"
            }}
        >
            <p>{index}</p>
            <p>{noteInfo.note}</p>
        </div>       
    )
}

export default Note