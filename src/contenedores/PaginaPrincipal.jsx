import React, { useEffect, useState } from 'react'
import '../styles/PaginaPrincipal.css'
import TarjetaRecomendacion from './TarjetaRecomendacion'
import getDiscover from '../services/getDiscover'
import Person from '../components/Person'
import SearchBar from '../components/SearchBar'

function PaginaPrincipal () {
  const [mostPopularMovies, setMostPopularMovies] = useState([])
  const [mostPopularSeries, setMostPopularSeries] = useState([])
  const [mostPopularPeople, setMostPopularPeople] = useState([])

  useEffect(() => {
    const searchPopularMovies = async () => {
      try {
        const { data } = await getDiscover('movie', {
          page: 1
        })
        const movies = data.results.slice(0, 5)

        setMostPopularMovies(movies)
      } catch (error) {
      }
    }
    const searchPopularSeries = async () => {
      try {
        const { data } = await getDiscover('tv', {
          page: 1
        })
        const series = data.results.slice(0, 5)

        setMostPopularSeries(series)
      } catch (error) {
      }
    }

    const searchPopularPeople = async () => {
      try {
        const { data } = await getDiscover('person', {
          page: 1
        })
        const people = data.results.slice(0, 5)

        setMostPopularPeople(people)
      } catch (error) {
      }
    }

    searchPopularMovies()
    searchPopularSeries()
    searchPopularPeople()

  }, [])

  return (<>
    <SearchBar></SearchBar>
    <div className='contenedor-principal'>
      <h1>Peliculas populares</h1>
      <div className='principal-contenedor-recomendaciones'>
        {mostPopularMovies.map((movie) => (
          <TarjetaRecomendacion
            key={movie.id}
            title={movie.title || movie.name || 'Un título'}
            rating={movie.vote_average || 5}
            imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title || movie.name || 'Película'}
            type='movie'
            id={movie.id}
          />
        ))}

      </div>

      <div>
        <h1>Series mas populares</h1>
        <div className='principal-contenedor-recomendaciones'>
          {mostPopularSeries.map((serie) => (
            <TarjetaRecomendacion
              key={serie.id}
              title={serie.title || serie.name || 'Un título'}
              rating={serie.vote_average || 5}
              imgPath={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
              alt={serie.title || serie.name || 'Película'}
              id={serie.id}
              type={'tv'}
            />
          ))}
        </div>
      </div>

      <div>
        <h1>Personas mas populares</h1>
          <div className='principal-contenedor-recomendaciones'>
          {
            mostPopularPeople.map((person) => (
              <Person
                key={person.id}
                imageFilePath={person.profile_path}
                personName={person.name}
                ValoratePerson={person.vote_average}
                id={person.id}
              />
            ))
          }
          </div>
      </div>
    </div>
  
  </>
  )
}

export default PaginaPrincipal
