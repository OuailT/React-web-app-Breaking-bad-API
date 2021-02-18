import CharacterSingle from './CharacterSingle';
import Spinner from '../UI/Spinner'

const CharacterGrid = ({characters , isLoading}) => {
    return isLoading ? 
    ( <Spinner /> )
    : (<section className="cards">
        {characters.map((character) => (
        <CharacterSingle key={character.char_id}  character={character}/>
        ))}
    </section>)
    
}

export default CharacterGrid
