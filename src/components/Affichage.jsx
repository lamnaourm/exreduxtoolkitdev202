import React from 'react'
import { useSelector } from 'react-redux'

export default function Affichage() {

    const compteur = useSelector(state => state.counter.compteur)
  return (
    <div>
        <h1>{compteur}</h1>
    </div>
  )
}
