import avatar from '../assets/avatar.png';
import imgSonu from '../assets/imgSonu.jpeg';

function Intro(){
  return (
    <section className="text-center mt-20">
       <div className='flex justify-center '>
           <div className='text-left'>
             <h1 className="text-3xl font-bold">Hi ,</h1>
             <h1 className="text-3xl font-bold">I am Sonu 👋</h1>
            <h1 className="text-3xl font-bold">Designer, Front-end Developer</h1>
            <p className="mt-2 text-gray-500">I design and code beautifully simple things, and I love what I do.</p>
           </div>
       </div>
      
      <img src={imgSonu} alt="Avatar" className="mx-auto mt-8 rounded-full w-80 h-80"/>
    </section>
  );
}

export default Intro;
