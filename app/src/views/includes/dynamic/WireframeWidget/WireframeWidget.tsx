import { Excalidraw } from "@excalidraw/excalidraw";


export default function WireframeWidget() {
    return (
        <Excalidraw
            onChange={(elements, state) =>
                console.log("Elements :", elements, "State : ", state)
            }
            onPointerUpdate={(payload) => console.log(payload)}
        />
    )
}