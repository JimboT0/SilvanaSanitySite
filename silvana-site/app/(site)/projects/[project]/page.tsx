import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type props = {
    params: { project: string }
};

export default async function Project({ params }: props) {

    const slug = params.project;

    const project = await getProject(slug);

    return(
        <div>
        <header className='flex items-center justify-between'>
            <h1 className='text-3xl'>{project.name}</h1>
            <a 
                href={project.url}
                title="view project"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500'>
                View project
            </a>
        </header>

        {/*content*/}
        <div>
            <PortableText value={project.content} />
        </div>

        {/*img*/}
        <img 
         src={project.image}
         alt={project.name}
         width={1920}
         height={1080}
         className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
         />

    </div>
    )
};