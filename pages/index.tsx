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
    titulo: '¿Qué número falta?',
    subtitulo: 'Selecciona el número que falta en la línea.',
    id: 1,
    link: 'https://www.educaplay.com/learning-resources/6232527-que_numero_falta.html',
    bg: 'purple',
    color: 'white',
  },
  {
    titulo: 'Tipos de corte',
    subtitulo: 'Información en tipos de corte.',
    id: 2,
    link: 'https://www.educaplay.com/learning-resources/6682619-tipos_de_corte.html',
    bg: 'white',
    color: 'purple',
  },
  {
    titulo: 'Terminología básica',
    subtitulo: 'Conceptos básicos de informática.',
    id: 3,
    link: 'https://www.educaplay.com/learning-resources/10483039-terminologia_basica.html',
    bg: 'purple',
    color: 'white',
  },
  {
    titulo: 'Precaución vial',
    subtitulo:
      'Observa con mucha atención las imágenes y selecciona el recuadro en blanco que se te indica.',
    id: 4,
    link: 'https://www.educaplay.com/learning-resources/5753565-precaucion_vial.html',
    bg: 'white',
    color: 'purple',
  },
  {
    titulo: 'Los números del 0 al 499',
    subtitulo: 'Practiquemos los números.',
    id: 5,
    link: 'https://www.educaplay.com/learning-resources/5941127-los_numeros_del_0_al_499.html',
    bg: 'purple',
    color: 'white',
  },
  {
    titulo: 'Classroom vocabulary',
    subtitulo:
      'Encuentra la palabra. Apóyate con la imagen y nombre de la palabra.',
    id: 6,
    link: 'https://www.educaplay.com/learning-resources/7974984-classroom_vocabulary.html',
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
            className={`text-${juego.color}${juego.color == "purple" ? "-600" : ""} ${juego.bg == "purple" ? 'bg-purple-600' : 'bg-white'} p-6 flex flex-col justify-between gap-12`}
            id={`juego${juego.id}`}
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
              className={`flex items-center justify-center py-2 rounded-md border-2 ${juego.color == "purple" ?  'border-purple-600' : 'border-white'} ${juego.bg == "purple" ? 'hover:bg-white hover:text-purple-600' : 'hover:bg-purple-600 hover:text-white'}`}
            >
              ¡Juega este!
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Homepage;
