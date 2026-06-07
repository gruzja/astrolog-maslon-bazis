import React, { useState } from 'react';

interface CelestialObject {
    id: number;
    name: string;
    type: string;
    distance: string;
    imageUrl: string;
}

interface Props {
    onAddObject: (obj: CelestialObject) => void;
}

function DiscoveryForm({ onAddObject }: Props) {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [distance, setDistance] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !type || !distance || !imageUrl) {
            alert("Proszę wypełnić wszystkie pola.");
            return;
        }

        const newObject: CelestialObject = {
            id: Date.now() % 1000,
            name: name,
            type: type,
            distance: distance,
            imageUrl: imageUrl,
        };

        onAddObject(newObject);

        setName('');
        setType('');
        setDistance('');
        setImageUrl('');
    };

    return (
        <div className="discovery-form">
            <h2>Zgłoś anomalię/obiekt</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nazwa:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="type">Typ:</label>
                    <input
                        id="type"
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="distance">Odległość:</label>
                    <input
                        id="distance"
                        type="text"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="imageUrl">Link do zdjęcia:</label>
                    <input
                        id="imageUrl"
                        type="url"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Zgłoś odkrycie</button>
            </form>
        </div >
    );
}

export default DiscoveryForm;
