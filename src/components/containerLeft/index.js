import React from 'react';
import { Container, Header, Content, } from './styles'
import { MdMenu } from 'react-icons/md'


export default function ContainerLeft({ city, setCity, dates, setNewCity }) {
    function handleAddCity() {
        if (city === '') {
            return setNewCity("Brasília")
        }
        return setNewCity(city)
    }
    
    return (
        <Container>
            <Header>
                <div>Weather Project</div>
                <div>
                    <input value={city} onChange={e => setCity(e.target.value)} placeholder="Type city name" />
                    <button type='button' onClick={handleAddCity}>Change</button>
                </div>
                <div>
                    <MdMenu size={40} />
                </div>
            </Header>
            <Content>
                <h1>
                    <span>{dates.temp}º</span>Graus Celsos Portiolio
                    </h1>
                <div>05:28 - Friday , 12 December 2019</div>
            </Content>
        </Container>
    )
}