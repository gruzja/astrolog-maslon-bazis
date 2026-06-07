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
    return (
        <div>
            {objects.map((obj) => (
                <div key={obj.id} onClick={() => onSelect(obj)}>
                    <img src={obj.imageUrl} alt={obj.name} width={60} />
                    <span>{obj.name}</span>
                </div>
            ))}
        </div>
    )
}

export default CatalogList