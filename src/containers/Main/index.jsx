import React, { memo, useCallback, useEffect, useState } from "react";
import Api from '../../api'
import Panel from './components/panel'
import { ContainerStyled } from './style'
import Board from './components/Board'

function Main(){

    const [data, setData] = useState({}) 
    
    const [country, setCountry] = useState('usa')

    const updateAt = new Date().toLocaleString()

    const getCoviData = useCallback((country) => {
        Api.getCountry(country)
        .then(data => setData(data))
    }, [])

    

    useEffect(()=>{
        getCoviData(country)
    }, [getCoviData, country])

    const handleChange= ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return(
        <ContainerStyled>
            <div className="mb-2">
                <Panel 
                data = {data}
                updateAt = {updateAt}
                onChange= {handleChange}
                country = {country}
                getCoviddata= {getCoviData}
                />
               

            </div>
        <Board data= {data} />

        </ContainerStyled>
    )
 
}

export default memo(Main)