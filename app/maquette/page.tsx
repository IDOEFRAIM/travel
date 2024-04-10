import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"
const page = () => {
    return (
        <div className="flex flex-col">
            <div className="h-[100vh] flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(/header.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="flex flex-col">
                    <p className="text-sky-600 text-6xl my-4 text-center">Comparateur de billet de bus </p>
                    <p className="text-sky-600 text-4xl my-4 text-center">Comparer et trouvez les meilleurs tarifs </p>
                </div>

                <div className="flex flex-col  xl:flex-row xl:justify-around items-center">
                    <div className="flex flex-row justify-center items-center mb-5">
                        <input type="text"
                            placeholder="Depart"
                            className="w-[100] h-[50px] bg-white mx-8" />
                        <span><ArrowLeftRight /></span>
                        <input type="text"
                            placeholder="Arrivee" className="w-[100] h-[50px] bg-white mx-8" />
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <input type="date" className="w-[100] h-[50px] bg-white mx-8" />
                        <span><ArrowLeftRight /></span>
                        <input type="date" className="w-[100] h-[50px] bg-white mx-8" />

                    </div>
                    <Button variant='primary'>Comparer</Button>
                </div>


            </div>
            <h1 ><Button variant='primary'>Mes Reservations</Button> </h1>
            <div>
                <h1 className="text-3xl text-sky-700 mx-center my-8">Comment ca fonctionne?</h1>
                <div className="grid gap-y-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                    <div className="flex flex-col w-[320px]">
                        <Image
                            width='300'
                            height='300'
                            alt='fonctionnement picture'
                            src='/header.jpg'
                        />
                        <h1 className="text-xl text-sky-700 mx-auto my-8">Trouver</h1>
                        <span className="text-lead text-gray text-center">Rechercher les moyens de transport disponibles</span>
                    </div>
                    <div className="flex flex-col w-[320px]">
                        <Image
                            width='300'
                            height='300'
                            alt='fonctionnement picture'
                            src='/header.jpg'
                        />
                        <h1 className="text-xl text-sky-700 mx-auto my-8">Comparer</h1>
                        <span className="text-lead text-gray text-center">Comparer les resultats. Choisisez l offre la plus interresante</span>
                    </div>
                    <div className="flex flex-col w-[320px]">
                        <Image
                            width='300'
                            height='300'
                            alt='fonctionnement picture'
                            src='/header.jpg'
                        />
                        <h1 className="text-xl text-sky-700 mx-auto my-8">Acheter</h1>
                        <span className="text-lead text-gray">Selectionner l offre.Recevez directement surr le site la compagnie disponible</span>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl text-sky-700 mx-center my-8 text-center">Achetez vos billets en ligne</h1>
                <div className="grid gap-y-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                </div>
            </div>
            <div>
                <h1 className="text-2xl text-sky-700  text-center my-8">Nous comparons</h1>
                <div className="grid gap-y-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                </div>
            </div>
            <div>
            <h1 className="text-2xl text-sky-700  text-center my-8">Solution des lignes prefere</h1>

                <div className="flex flex-col sm:flex-row justify-around items-center">
                    <div className="grid grid-cols-2 gap-8 justify-items-center my-6">
                    <Image
                        width='130'
                        height='130'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                                        <Image
                        width='130'
                        height='130'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                                        <Image
                        width='130'
                        height='130'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                                        <Image
                        width='130'
                        height='130'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                    </div>
                    <Image
                        width='300'
                        height='300'
                        alt='fonctionnement picture'
                        src='/header.jpg'
                    />
                </div>
            </div>
            <div>
                <h1 className="text-2xl text-sky-700 my-6">Qu est ce que Africa route</h1>
                <span className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam dolores reiciendis eligendi, nihil quae id labore sunt, obcaecati veritatis nemo, atque aliquam? Saepe in dignissimos officia eum, neque minus.
                </span>
            </div>
            <div>
                <h1 className="text-3xl text-sky-700 text-center my-8">Pourquoi un comparateur de billet de bus</h1>
                <Section name='Ouverture puis liberaton du marche de l autocar' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora molestias eos libero id veniam, accusamus dolor tempore qui soluta? Vel dignissimos doloribus libero pariatur repellendus explicabo velit eaque itaque.' />
                <Section name='Ouverture puis liberaton du marche de l autocar' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora molestias eos libero id veniam, accusamus dolor tempore qui soluta? Vel dignissimos doloribus libero pariatur repellendus explicabo velit eaque itaque.' />
            </div>
        </div>
    )
}
///resusable section
export const Section = ({name,text}:any)=>{
    return(
        <>
        <h1 className="text-2xl text-gray-700 my-4">{name} </h1>
        <span className="text-lead">{text} </span>
        </>
    )
}
export default page
