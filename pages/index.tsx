import type { NextPage } from 'next'
import { useGetPokemons } from '../features/pokemon/hooks/useGetPokemons'
import { useEffect, useRef, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonCardGrid } from '../components/PokemonCardGrid'
import { PrerenderPokemonColors } from '../components/PrerenderPokemonColors'
import { SearchBox } from '../components/SearchBox'
import { usePagination } from '../features/pagination/hooks/usePagination'
import { Pagination } from '../components/Pagination'
import { Pokemon } from '../features/pokemon/models/pokemon'
import { useGetAdditionalPokemonsInfo } from '../features/pokemon/hooks/useGetAdditionalPokemonsInfo'
import { ProgressIndicator } from '../components/ProgressIndicator/ProgressIndicator'
import { Logo } from '../components/Logo'

const Home: NextPage = () => {
  const recordsPerPage: number = 24
  const inputTimeoutRef = useRef<NodeJS.Timeout | null>(null) 

  const [ pokemonCount, setPokemonCount ] = useState<number>(0)
  const [ pokemons ] = useGetPokemons()
  const [ pokemonGrid, setPokemonGrid ] = useState<Pokemon[]>([])
  const [ searchFilter, setSearchFilter ] = useState<string>('')
  const [ filteredPokemons, setFilteredPokemons ] = useState<any[]>([])
  const [ paginatedPokemons, currentPage, setCurrentPage, nextPage, previousPage ] = usePagination(filteredPokemons, recordsPerPage)
  const [ pokemonsWithAdditionalInfo ] = useGetAdditionalPokemonsInfo(paginatedPokemons)
  const [ loading, setLoading ] = useState<boolean>(true)

  const renderPokemonCard = (id: number, {
    name,
    image,
    color,
    missingArtwork,
  }: any) =>
    <PokemonCard
      key={ id }
      id={ id }
      name={ name }
      color={ color }
      imageUrl={ image }
      missingArtwork={ missingArtwork } />

  useEffect(() => {
    if (pokemons.length > 0) {
      filterPokemons()
    }
  }, [ pokemons ])

  useEffect(() => {
    if (pokemons.length < 1) {
      return
    }

    if (inputTimeoutRef.current) {
      clearTimeout(inputTimeoutRef.current)
    }

    inputTimeoutRef.current = setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1)
      }

      filterPokemons()
    }, 500)
  }, [ searchFilter ])

  useEffect(() => {
    console.log(pokemonsWithAdditionalInfo)
    if (pokemons.length > 0) {
      setLoading(false)
      setPokemonGrid(pokemonsWithAdditionalInfo)
    }
  }, [ pokemonsWithAdditionalInfo ])

  const filterPokemons = () => {
    let filteredPokemons: any[] = []

    if (searchFilter === '') {
      filteredPokemons = [...pokemons]
    } else {
      filteredPokemons = pokemons.filter((pokemon: any) =>
        pokemon.name.includes(searchFilter.toLowerCase()))
    }

    setPokemonCount(filteredPokemons.length)
    setFilteredPokemons(filteredPokemons)
  }

  const handleOnChangeSearchFilter = ({ target: { value } }: { target: { value: string } }) => {
    setPokemonGrid([])
    setLoading(true)

    setSearchFilter(value)
  }

  const handleOnClearSearchFilter = () => {
    setPokemonGrid([])
    setLoading(true)

    setSearchFilter('')
  }

  const handleOnClickNext = () => {
    setPokemonGrid([])
    setLoading(true)

    nextPage()
  }

  const handleOnClickPrevious = () => {
    setPokemonGrid([])
    setLoading(true)

    previousPage()
  }

  return (
    <div>
      <title className='font-Montserrat'>PokeDex</title>
      <div>
        <header>
          <PrerenderPokemonColors />
          <div className='min-w-full h-16 bg-red-500 shadow'>
            <Logo />
          </div>
          <div className='relative'>
            <ProgressIndicator loading={ loading } />
          </div>
        </header>

        <main>
          <div className='bg-white mx-auto md:max-w-4xl'>
            <div className='flex flex-cols max-w-lg px-6 py-4 h-16'>
              <SearchBox
                value={ searchFilter }
                onChange={ handleOnChangeSearchFilter }
                onClear={ handleOnClearSearchFilter } />
            </div>
            <PokemonCardGrid
              pokemons={ pokemonGrid }
              renderCard={ renderPokemonCard } />
            <Pagination
              currentPage={ currentPage as number }
              onClickNext={ handleOnClickNext }
              onClickPrevious={ handleOnClickPrevious }
              recordCount={ pokemonCount }
              recordsPerPage={ recordsPerPage }
              enabled={ pokemonGrid.length > 0 } />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
