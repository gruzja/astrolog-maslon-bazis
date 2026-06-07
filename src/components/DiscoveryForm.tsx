interface CelestialObject {
    id: number
    name: string
    type: string
    distance: string
    imageUrl: string
}

interface Props {
    onAddObject: (obj: CelestialObject) => void
}

function DiscoveryForm({ onAddObject }: Props) {
    return <div>DiscoveryForm</div>
}

export default DiscoveryForm