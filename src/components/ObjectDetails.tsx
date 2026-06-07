interface CelestialObject {
    id: number
    name: string
    type: string
    distance: string
    imageUrl: string
}

interface Props {
    selectedObject: CelestialObject | null
}

function ObjectDetails({ selectedObject }: Props) {
    return <div>ObjectDetails</div>
}

export default ObjectDetails