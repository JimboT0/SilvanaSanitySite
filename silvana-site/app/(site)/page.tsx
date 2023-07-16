import { getProjects } from '@/sanity/sanity-utils';
import Hero from '../pages/components/hero';
import FirstPage from '../pages/components/firstpage';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects();

  return (

    <div>

      <div>

        <h2 className='mt-24 font-bold text-gray-700 text-3xl'>Projects</h2>

        <div className='mt-5 grid md:grid-cols-3 lg:grid-cols-3 gap-8'>

          {projects.map((project) => (

            <Link
             href={`projects/${project.slug}`}
             key={project._id} 
             className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">

              {project.image && (

                <img
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover border border-gray-500 rounded-lg"
                />

              )}


              <div className='mt-2 font-extrabold bg-green-100 bg-clip-text text-transparent'>

                {project.name}

              </div>

            </Link>


          ))}

        </div>

      </div>

    </div>


  );

}

