import { useState } from 'react'
import CatalogList from './components/CatalogList'
import ObjectDetails from './components/ObjectDetails'
import DiscoveryForm from './components/DiscoveryForm'

const initialObjects = [
    { id: 1, name: 'Mars', type: 'Planeta', distance: '54.6 mln km', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg' },
    { id: 2, name: 'Jowisz', type: 'Planeta', distance: '628 mln km', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg' },
    { id: 3, name: 'Syriusz', type: 'Gwiazda', distance: '8.6 ly', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Close-up_of_Sirius.jpg/960px-Close-up_of_Sirius.jpggi' },
    { id: 4, name: 'Mgławica Oriona', type: 'Mgławica', distance: '1344 ly', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg' },
    { id: 5, name: 'Saturn', type: 'Planeta', distance: '1.2 mld km', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg' },
]

function App() {
  const [objects, setObjects] = useState(initialObjects)
  const [selectedObject, setSelectedObject] = useState<typeof initialObjects[0] | null>(null)
  function handleSelectObject(obj: typeof initialObjects[0]) {
    setSelectedObject(obj)
  }

  function handleAddObject(newObj: typeof initialObjects[0]) {
    setObjects([...objects, newObj])
  }

  return (
      <div className="app-layout">
        <CatalogList objects={objects} onSelect={handleSelectObject} />
        <ObjectDetails selectedObject={selectedObject} />
        <DiscoveryForm onAddObject={handleAddObject} />
      </div>
  )
}

export default App