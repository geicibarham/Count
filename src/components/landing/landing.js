import './_landing.scss'
import cupcake from '../../assets/images/cupcake.png'
const Landing = ()=>{
    return (
        <section className='landing'>
            <div className='btn-container'>
      <button
      
       className='firstBtn comic'>
       
        Level 1
        <img className="btnIcon"src={cupcake} alt="cupcake icon"/></button> 
      <button className='secondBtn comic'>Level 2</button>
      <button className='thirdBtn comic'> Level 3</button>
      </div>
      </section>
    )
}

export default Landing;