interface CelestialObject {
    id: number;
    name: string;
    type: string;
    distance: string;
    imageUrl: string;
}

interface Props {
    selectedObject: CelestialObject | null;
}

function ObjectDetails({ selectedObject }: Props) {
    if (!selectedObject) {
        return (
            <div className="object-details">
                <h2>Wskaż cel obserwacji</h2>
                <p>Prosimy o wybranie obiektu z katalogu, aby zobaczyć szczegółowe dane obserwacyjne.</p>
            </div >
        );
    }

    return (
        <div className="object-details">
            <img
                src={selectedObject.imageUrl}
                alt={`${selectedObject.name}`}
                className="detail-image"
            />

            <div className="details-info">
                <h1>{selectedObject.name}</h1>
                <p><strong>Typ obiektu:</strong> {selectedObject.type}</p>
                <p><strong>Odległość od Ziemi:</strong> {selectedObject.distance}</p>
            </div >
        </div>
    );
}

export default ObjectDetails;
