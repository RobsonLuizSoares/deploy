import React from 'react'
import getUser from '../utils/getUser'
const Repositorios = ({ repos, user }) => {
    return (
        <div>
            <h1 className='text-2xl'>Meus Repositórios</h1>
            <h2 className='text-center text-3xl'>Meus repositórios no Git Hub</h2>
            <h2 className='text-center text-3xl'>Public Repositories: {user.public_repos} repos</h2>

            {
                repos.map(repo => (
                    <div key={repo.id} className='hover:shadow-md container mx-auto my-4 rounded bg-gray-200 px-4 py-4'>
                        <h3 className='font-bold'>{repo.name}</h3>
                        <h3>Linguagem: {repo.language}</h3>
                    </div>
                ))
            }

        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { repos, user } = await getUser('RobsonLuizSoares')
    return {
        props: {
            repos,
            user
        }
    }
}
export default Repositorios