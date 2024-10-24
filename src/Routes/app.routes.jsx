import { Routes, Route } from 'react-router-dom';

import { PageOne } from '../Pages/PageOne/PageOne';
import { History } from '../Pages/History/History';
import { Motor } from '../Pages/TiposMotor/Motor';
import { FiveCars } from '../Pages/5Carros/FiveCars';
import { Carroceria } from '../Pages/Carroceria/Carroceria';
import { Luzes } from '../Pages/Luzes/Luzes';
import { Pneu } from '../Pages/Pneus/Pneu';
import { FlashCars } from '../Pages/FlashCars/FlashCars';
import { About } from '../Pages/About/About';
import { Contact } from '../Pages/Contact/Contact';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/Pneus" element={<Pneu />} />
            <Route path='/LuzesDoPaniel' element={<Luzes />} />
            <Route path='/TiposDeCarroceria' element={<Carroceria />} />
            <Route path='/CarrosMaisVendidos' element={<FiveCars />} />
            <Route path='/TiposDeMotores' element={<Motor />} />
            <Route path='/HistoriaDoAutomovel' element={<History />} />
            <Route path='/OsCarrosMaisRapidosDaHistoria' element={<FlashCars />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/Contato' element={<Contact />} />
        </Routes>
    )
}