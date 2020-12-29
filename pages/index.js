import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Ovelhas Artesanais</title>
                <script src="https://use.fontawesome.com/2cae3a3b5c.js"></script>
            </Head>
            <div className='bg-gray-100'>
                <div className='mx-auto container'>
                    <img className='sm:h-24 lg:h-52 mx-auto' src='/images/ovelhasBanner.png' alt='ovelhas que encantam' />
                </div>
                <div className='text-center mb-12 mt-4 font-tema' >
                    <p className='text-3xl md:text-2xl xl:text-4xl pt-6 px-6 mb-12 text-center tracking-wide font-semibold'>Aprenda agora mesmo a fazer ovelhas macias e fofinhas</p>
                    <div className='container mx-auto md:flex md:px-36'>
                        <img className='mt-4 mx-auto h-auto rounded-md shadow-md sm:flex-1 md:mr-6' src='/images/mini.png' alt='ovelhas' />
                        <img className='mt-4 mx-auto h-auto rounded-md shadow-md md:flex-1' src='/images/perfil.png' alt='ovelhas' />
                    </div>
                </div>
                <div className='container mx-auto font-tema bg-green-100 py-6'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center my-4'>Benefícios de trabalhar em casa com artesanato</h2>
                    <p className='mx-10 text-xl lg:text-2xl lg:text-center text-justify mb-4'><i className="fa fa-check" aria-hidden="true"></i> Qualidade de vida</p>
                    <p className='mx-10 text-xl lg:text-2xl lg:text-center text-justify mb-4'><i className="fa fa-check" aria-hidden="true"></i> Horários flexíveis</p>
                    <p className='mx-10 text-xl lg:text-2xl lg:text-center text-justify mb-4'><i className="fa fa-check" aria-hidden="true"></i> Mais tempo com a família</p>
                    <p className='mx-10 text-xl lg:text-2xl lg:text-center text-justify mb-4'><i className="fa fa-check" aria-hidden="true"></i> Trabalhe quanto quiser</p>
                    <p className='mx-10 text-xl lg:text-2xl lg:text-center text-justify mb-4'><i className="fa fa-check" aria-hidden="true"></i> Ser seu próprio patrão</p>
                    <p className='mx-10 text-xl lg:text-2xl lg:text-center text-justify mb-4'><i className="fa fa-check" aria-hidden="true"></i> Todo o lucro é seu</p>
                </div>
                <div className='container my-4 mx-auto font-tema bg-indigo-100 py-6'>
                    <h2 className='text-2xl font-bold text-center my-4'>Qualquer pessoa pode fazer</h2>
                    <p className='mx-auto md:text-2xl text-xl text-center mb-4'>Método de ensino prático, rápido e fácil. Aprenda passo-a-passo como fazer ovelhas que encantam e vendem muito bem.</p>
                    <p className='mx-auto md:text-2xl text-xl text-center'>Em muito pouco tempo e mesmo com pouca prática, você mesmo estará fazendo suas próprias ovelhas </p>
                </div>
                <div className='container md:flex mb-6 mx-auto bg-indigo-100'>
                    <div className='flex-1'>
                        <img className='my-2 mx-auto h-auto rounded-md shadow-md w-3/4 md:flex-1' src='/images/duas.png' alt='ovelhas' />
                        <label className='ml-12 text-center'>O limite é sua imaginação</label>
                    </div>
                    <div className='flex-1'>
                        <img className='mt-4 mx-auto h-auto rounded-md shadow-md w-3/4 md:flex-1' src='/images/frente.png' alt='ovelhas' />
                        <label className='ml-12 text-center'>Use a criatividade</label>
                    </div>
                    <div className='flex-1'>
                        <img className='mt-4 mx-auto h-auto rounded-md shadow-md w-3/4 md:flex-1' src='/images/ovelhaLaco.png' alt='ovelhas' />
                        <label className='ml-12 text-center'>Que lindinha!</label>
                    </div>
                </div>
                <div className='container mx-auto font-tema bg-pink-100 py-6'>
                    <h2 className='font-semibold text-2xl text-center my-4'>A Apostila</h2>
                    <p className='mx-4 text-xl text-center md:text-3xl mb-4'>Apostila com mais de 30 fotos e ilustrações, além dos moldes no tamanho certo para você seguir.</p>
                    <div className='container md:flex'>
                        <div className='flex-1'>
                            <img className='my-2 mx-auto h-auto rounded-md shadow-md w-3/4 md:flex-1' src='/images/tecido.png' alt='ovelhas' />
                            <label className='ml-12 text-center'>Tecido</label>
                        </div>
                        <div className='flex-1'>
                            <img className='mt-4 mx-auto h-auto rounded-md shadow-md w-3/4 md:flex-1' src='/images/molde.png' alt='ovelhas' />
                            <label className='ml-12 text-center'>Molde</label>
                        </div>
                        <div className='flex-1'>
                            <img className='mt-4 mx-auto h-auto rounded-md shadow-md w-3/4 md:flex-1' src='/images/costura.png' alt='ovelhas' />
                            <label className='ml-12 text-center'>Costura</label>
                        </div>
                    </div>
                    <p className='mx-4 text-xl text-center  my-6'>Na apostila, todos os cortes e moldes tem medidas para seguir.
                </p>
                </div>
                <div className='container mx-auto font-tema bg-yellow-100 my-8 py-6'>
                    <h2 className='font-semibold text-2xl md:text-4xl text-center my-4'>Ganhe dinheiro!</h2>
                    <p className='mx-4 text-xl md:text-2xl text-center mb-4'>Ovelhas de pelúcia são uma ótima opção para chás de revelação, presentes para crianças, enfeites e decoração.</p>
                    <p className='mx-4 text-xl md:text-2xl text-center mb-4'>Aprenda agora mesmo e comece a ganhar dinheiro fazendo ovelhas fofinhas e macias.</p>
                </div>
                <div className='container mx-auto font-tema bg-yellow-100 my-6 py-6'>
                    <h2 className='font-semibold text-2xl md:text-4xl text-center my-4'>Quero Aprender!</h2>
                    <div className='container mx-auto pt-4 mb-4 text-center'>
                        <Link href='/checkout'>
                            <a className='border px-4 font-body md:px-8 py-6 text-2xl bg-green-400 rounded-md shadow hover:shadow-lg'>
                                ADQUIRIR MINHA APOSTILA!
                    </a>
                        </Link>
                    </div>
                </div>
                <div className='rodape bg-indigo-300 h-auto'>
                    <h3 className='text-center my-4 py-2 font-bold text-xl'>VK Produções</h3>
                    <p className='text-sm text-center'>O conteúdo da apostila digital tem caráter educativo. Proibida a reprodução do material sem a permissão do proprietário</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Index