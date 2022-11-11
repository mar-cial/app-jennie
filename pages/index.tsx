import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import kids from '/public/kids.png';

interface Juego {
  titulo: string;
  subtitulo: string;
  id: number;
  link: string;
  bg: string;
  color: string;
}
const juegos: Juego[] = [
  {
    titulo: 'Números del 1 al 15',
    subtitulo: 'Escucha el audio y selecciona la opción correcta.',
    id: 1,
    link: 'https://es.educaplay.com/juego/11602573-numeros_del_1_al_15.html',
    bg: 'purple',
    color: 'white',
  },
  {
    titulo: 'Sumas y restas',
    subtitulo: 'Selecciona la opción correcta y avanza.',
    id: 2,
    link: 'https://es.educaplay.com/juego/12215585-sumas.html',
    bg: 'white',
    color: 'purple',
  },
  {
    titulo: 'Cuenta y relaciona',
    subtitulo: 'Realiza las siguientes sumas con cálculo mental.',
    id: 3,
    link: 'https://es.educaplay.com/juego/5726617-cuenta_y_relaciona.html',
    bg: 'purple',
    color: 'white',
  },
  {
    titulo: 'Pensamiento Matemático 1-15',
    subtitulo:
      'Une cada dado con la tarjeta que tiene su número.',
    id: 4,
    link: 'https://es.educaplay.com/juego/8042912-pensamiento_matematico_1_10.html',
    bg: 'white',
    color: 'purple',
  },
  {
    titulo: 'Mapa interactivo: Números',
    subtitulo: 'Identifica los números del 1 al 20.',
    id: 5,
    link: 'https://es.educaplay.com/juego/6824582-numeros.html',
    bg: 'purple',
    color: 'white',
  },
  {
    titulo: 'El hogar de los animales',
    subtitulo:
      'Jugaremos con un memorama donde los alumnos identificarán a que habitat pertenece cada uno de los animales.',
    id: 6,
    link: 'https://www.educaplay.com/learning-resources/5274148-el_hogar_de_los_animales.html',
    bg: 'white',
    color: 'purple',
  },
];

const Homepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mtra. Jennie | ¡Aprende y diviertete!</title>
      </Head>
      <header className="flex justify-center gap-4 items-center py-4 h-[10vh]">
        <h2 className="text-sm text-purple-600 font-title">
          Por maestra Jennie
        </h2>
        <div className="flex gap-1 text-yellow-500">
          <BsFillSunFill />
          <BsFillSunFill />
          <BsFillSunFill />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl text-purple-600 font-title">
            ¡Diviértete y aprende!
          </h1>
          <p className="font-body">
            Entra a cualquiera de los siguientes juegos para empezar a jugar.
          </p>
          <Link
            href={'#juego1'}
            passHref
            className="px-6 py-2 font-semibold text-purple-600 transition-all border-2 border-purple-600 rounded-md font-body hover:bg-purple-600 hover:text-white"
          >
            ¡Juega ya!
          </Link>
        </div>
        <Image src={kids} width={700} height={400} alt="school kids" />
      </main>

      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        {juegos.map((juego) => (
          <article
            className={`${juego.color == 'purple' ? 'text-white bg-purple-600' : 'text-purple-600 bg-white'}  p-6 flex flex-col justify-between gap-12`}
            id={`juego${juego.id}`}
            key={juego.id}
          >
            <header className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-2xl font-title">{`Juego ${juego.id}`}</span>
                <Link
                  className="text-5xl font-title hover:underline hover:underline-purple-600"
                  href={juego.link}
                  passHref
                >
                  {juego.titulo}
                </Link>
                <p className="pt-6 font-body">{juego.subtitulo}</p>
              </div>
            </header>

            <Link
              href={juego.link}
              passHref
              className={`flex items-center justify-center py-2 rounded-md border-2 ${juego.color == "purple" ?  'border-white' : 'border-purple-600'}  ${juego.bg == "white" ? 'hover:bg-white hover:text-purple-600' : 'hover:bg-purple-600 hover:text-white'}`}
            >
              ¡Juega este!
            </Link>
          </article>
        ))}
      </section>

      <section className='flex flex-col items-center justify-center gap-6 py-12'>
        <h2 className='text-4xl font-bold text-purple-600 font-title'>La gallina papanata</h2>
        <iframe width="560" height="355" src="https://www.youtube.com/embed/-7JX0hdXBPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-full md:w-1/2'></iframe>
      </section>
    </div>
  );
};

export default Homepage;
