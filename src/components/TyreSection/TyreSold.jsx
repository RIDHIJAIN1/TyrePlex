import React from 'react'
import half from '../../../images/half.png'
import Dropdown from '../Dropdown';
import { FaSearch } from 'react-icons/fa';
import Button from '../Button';
import Mrf from '../../../images/mrf.png';
import TyreCard from './TyreCard';


const TyreSold = () => {
    const options1 = ['APOLLO', 'BIRLA', 'CEAT', 'BedRock', 'Bridgerton'];
    const options2 = ['High To Low', 'Low To High'];
    const options3 = ['Bike', 'Car', 'Scooter'];
    const options4 = ['Hyundai', 'Honda', 'Toyota', 'Maruti Suzuki', 'MG'];
    const options5 = ['Duet', 'Pleasure Plus', 'Maestro Edge', 'Maestro Edge 125'];
    const options6 = ['Choose Variant'];
  return (
    <div>


       <h1 className='text-3xl lg:text-4xl font-bold text-center mt-16'>TYRES SOLD</h1>
       <div className="flex flex-wrap justify-center gap-4 p-4 my-10">
<Dropdown title="Filter By" options={options1} />
<Dropdown title="Most Popular" options={options2} />
<Dropdown title="Car" options={options3} />
<Dropdown title="Choose Brand" options={options4} />
<Dropdown title="Choose Model" options={options5} />
<Dropdown title="Choose Variant" options={options6} />
<button className="bg-black text-white px-4 py-2  flex items-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
      <FaSearch className="w-5 h-5 mr-2" />
      Search
    </button>
</div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
     <TyreCard name="NYLOGRIP ZAPPER"warranty="6 Years Warranty"amount="$199.00"tyre={half} image={Mrf}/>
     <TyreCard name="NYLOGRIP ZAPPER"warranty="6 Years Warranty"amount="$199.00"tyre={half} image={Mrf}/>
     <TyreCard name="NYLOGRIP ZAPPER"warranty="6 Years Warranty"amount="$199.00"tyre={half} image={Mrf}/>
     <TyreCard name="NYLOGRIP ZAPPER"warranty="6 Years Warranty"amount="$199.00"tyre={half} image={Mrf}/>
 
  
  
</div>
<div className="text-center justify-center mx-auto m-10">
         <Button >VIEW MORE</Button>
         </div>
    </div>
  )
}

export default TyreSold
