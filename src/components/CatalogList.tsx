interface CelestialObject {
    id: number
    name: string
    type: string
    distance: string
    imageUrl: string
}

interface Props {
    objects: CelestialObject[]
    onSelect: (obj: CelestialObject) => void
}

function CatalogList({ objects, onSelect }: Props) {
    return <div>CatalogList</div>
}

export default CatalogList