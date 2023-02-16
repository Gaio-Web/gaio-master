import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import fotoVertical1 from '../../assets/foto1.png'
import fotoVertical2 from '../../assets/foto2.png'
import fotoVertical3 from '../../assets/foto3.png'

import logo from '../../assets/logoGaio.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';

import firebase from '../../services/firebase';

import ReactWhatsapp from 'react-whatsapp';
import Carousel from './carousel';

import Helmet from 'react-helmet'

export default function Products() {
    let { id } = useParams();

    const newString2 = id.replace(/-/g, " ");
    document.title = newString2

    const [store, setStore] = useState([{
        logo,
        backPhoto: '',
        historyPhoto: '',
        offerPhoto: '',
        gallery: [{}],
        segunda: '',
        terca: '',
        quarta: '',
        quinta: '',
        sexta: '',
        sabado: '',
        domingo: '',
        street: '',
        state: '',
        city: '',
        number: '',
        complement: '',
        link: ''
    }])

    const [color, setColor] = useState('rgb(5, 55, 124)');
    
     const [ street, setStreet ] = useState('Rua Exemplo');
     const [ state, setState ] = useState('Estado');
     const [ number, setNumber ] = useState('1234');
     const [ complement, setComplement ] = useState('402');
     const [city, setCity] = useState('Cidade');

    useEffect(() => {
        async function getStore(){
            const newString = id.replace(/-/g, " ");
            await firebase.firestore().collection('store')
            .where('name', '==', newString)
            .onSnapshot(snapshot => {
                let list = []
        
                snapshot.forEach(doc => {
                    list.push({
                        id: doc.id,
                        ...doc.data()
                    })
                 })
    
                setStore(list)
                if(list[0].color === undefined){
                    return
                }else{
                    setColor(list[0].color)
                }

                if(list[0].street === undefined){
                    return
                }else{
                    setStreet(list[0].street)
                }

                if(list[0].state === undefined){
                    return
                }else{
                    setState(list[0].state)
                }

                if(list[0].number === undefined){
                    return
                }else{
                    setNumber(list[0].number)
                }

                if(list[0].complement === undefined){
                    return
                }else{
                    setComplement(', ' + list[0].complement + ' ')
                }

                if(list[0].city === undefined){
                    return
                }else{
                    setCity(list[0].city)
                }
            })
        }

        getStore()
    },[])

 return (
    <Container>

        <Helmet>
            <title>{newString2}</title>
            <meta name="theme-color" content={color}/>
            <meta property="title" content={newString2}/>
            <meta name="description" content={store[0]?.description} />
            <meta name="image:secure_url" itemprop="image" content={store[0]?.logo}/>


            <meta name="og:title" content={newString2}/>
            <meta property="og:description" content={store[0]?.description} />
            <meta name="og:image:secure_url" itemprop="image" content={store[0]?.logo}/>
            <meta property="og:type" content="website" />
        </Helmet>

        <div className='nav'>
            {store[0]?.logo === '' ? (
                <h1 style={{ color: color }}>{store[0]?.name}</h1>
            ) : (
                <img src={store[0]?.logo}/>
            )}
         </div>
        
        {store[0].description === 'f' ? (
            <></>
        ) : (
            <div className='header' style={{ backgroundColor: color }}>
            {store[0]?.call === 'f' ? (
                <></>
            ) : (
                <h1>{store[0]?.call}</h1>
            )}

            <p>{store[0]?.description}</p>

            <img src={store[0]?.backPhoto}/>
            {store[0].backPhoto === '' && <img src={fotoVertical1}/>}


                <ReactWhatsapp number={`+55${store[0]?.phone}`} message={'Te encontrei pelo seu site e queria saber um pouco mais'}>
                Vamos conversar
                </ReactWhatsapp>
           
        </div>
        )}

        {store[0]?.history == 'f' ? (
            <></>
        ) : (
            <div className='history'>
            <h1 style={{ color: color }}>Nossa história</h1>
            
            <p>{store[0]?.history}</p>

            <img src={store[0]?.historyPhoto}/>
            {store[0].historyPhoto == '' && <img src={fotoVertical2}/>}

                <ReactWhatsapp number={`${store[0]?.phone}`} message={'Te encontrei pelo seu site e queria saber um pouco mais'}>
                Conversar por whatsapp
                </ReactWhatsapp>
            </div>
        )}

        {store[0]?.products === 'f' ? (
            <></>
        ) : (
            <div className='offer'>
            <h1 style={{ color: color }}>O que oferecemos</h1>
            
            <p>{store[0]?.products}</p>

            <img src={store[0]?.offerPhoto}/>
            {store[0].offerPhoto == '' && <img src={fotoVertical3}/>}

            
            
                <button onClick={() => {window.location.href = store[0].link}}>
                Fale com a gente
                </button>
            </div>
        )}

        <div className='qualities'>
            <h1 style={{ color: color }}>Nossos diferenciais</h1>

            <div className='card'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                <path d="M255 601 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 31
                -60 77 -105 138 -136 64 -32 176 -32 240 0 61 31 107 76 138 136 37 71 37 179
                0 250 -49 94 -135 152 -235 160 -32 2 -71 1 -88 -4z m160 -28 c65 -22 136 -93
                158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95 63 -107 106 -107 274
                0 381 75 75 181 98 285 62z"/>
                <path d="M249 536 c-56 -20 -96 -53 -126 -104 -40 -67 -40 -157 0 -224 15 -27
                32 -48 37 -48 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210 210
                22 0 40 5 40 10 0 14 -68 12 -111 -4z"/>
                <path d="M395 520 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                -12 -4 -9 -10z"/>
                <path d="M450 492 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                -9 -25 12 -12 45 38 62 94 20 69 11 131 -30 191 -29 43 -56 65 -56 44z"/>
                <path d="M292 407 c-23 -24 -19 -45 5 -26 11 9 13 -3 13 -70 0 -65 -3 -81 -15
                -81 -8 0 -15 -4 -15 -10 0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -7 10 -15 10
                -12 0 -15 18 -15 100 0 55 -4 100 -8 100 -5 0 -18 -10 -30 -23z"/>
                <path d="M210 134 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                -7 -10 -16z"/>
                <path d="M410 141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                -10 -4 -10 -9z"/>
                <path d="M260 115 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                -7 -10 -15z"/>
                <path d="M310 110 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                -10 -9 -10 -20z"/>
                <path d="M366 115 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                -7 -4 -15z"/>
                </g>
                </svg>

                <h1>{store[0]?.quality1}</h1>

                <p>{store[0]?.qualitydescription1}</p>
            </div>

            <div className='card'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64.000000 64.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                <path d="M245 611 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 54
                -103 146 -159 258 -159 300 0 395 403 128 540 -52 26 -144 38 -193 25z m160
                -28 c65 -22 136 -93 158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95
                63 -107 106 -107 274 0 381 75 75 181 98 285 62z"/>
                <path d="M252 550 c-52 -12 -109 -56 -139 -107 -39 -67 -39 -159 0 -226 15
                -26 32 -47 37 -47 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210
                210 22 0 40 5 40 10 0 11 -50 12 -98 0z"/>
                <path d="M385 530 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                -12 -4 -9 -10z"/>
                <path d="M440 502 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                -9 -25 12 -13 45 39 62 96 21 68 7 140 -37 200 -27 38 -49 52 -49 33z"/>
                <path d="M257 422 c-18 -20 -22 -42 -8 -42 5 0 11 9 14 21 5 17 12 20 49 17
                42 -3 43 -4 46 -41 3 -33 0 -39 -29 -55 -44 -23 -89 -67 -89 -86 0 -13 13 -16
                70 -16 40 0 70 4 70 10 0 6 -27 10 -61 10 -73 0 -74 12 -3 53 27 16 52 34 56
                41 14 21 8 73 -10 89 -25 23 -85 22 -105 -1z"/>
                <path d="M200 144 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                -7 -10 -16z"/>
                <path d="M400 151 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                -10 -4 -10 -9z"/>
                <path d="M250 125 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                -7 -10 -15z"/>
                <path d="M300 120 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                -10 -9 -10 -20z"/>
                <path d="M356 125 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                -7 -4 -15z"/>
                </g>
                </svg>

                <h1>{store[0]?.quality2}</h1>

                <p>{store[0]?.qualitydescription2}</p>
            </div>

            <div className='card'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64.000000 64.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                <path d="M255 601 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 54
                -103 146 -159 258 -159 300 0 395 403 128 540 -52 26 -144 38 -193 25z m160
                -28 c65 -22 136 -93 158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95
                63 -107 106 -107 274 0 381 75 75 181 98 285 62z"/>
                <path d="M262 540 c-52 -12 -109 -56 -139 -107 -39 -67 -39 -159 0 -226 15
                -26 32 -47 37 -47 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210
                210 22 0 40 5 40 10 0 11 -50 12 -98 0z"/>
                <path d="M395 520 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                -12 -4 -9 -10z"/>
                <path d="M450 492 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                -9 -25 12 -13 45 39 62 96 21 68 7 140 -37 200 -27 38 -49 52 -49 33z"/>
                <path d="M267 412 c-18 -20 -22 -42 -8 -42 5 0 11 9 14 21 5 17 12 20 49 17
                42 -3 43 -4 43 -38 0 -33 -2 -35 -37 -38 -21 -2 -38 -7 -38 -12 0 -5 17 -10
                38 -12 35 -3 37 -5 37 -38 0 -34 -1 -35 -43 -38 -37 -3 -44 0 -49 17 -6 23
                -23 29 -23 8 0 -43 92 -64 123 -29 20 22 22 63 5 80 -9 9 -9 15 0 24 18 18 14
                63 -6 81 -25 23 -85 22 -105 -1z"/>
                <path d="M210 134 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                -7 -10 -16z"/>
                <path d="M410 141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                -10 -4 -10 -9z"/>
                <path d="M260 115 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                -7 -10 -15z"/>
                <path d="M310 110 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                -10 -9 -10 -20z"/>
                <path d="M366 115 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                -7 -4 -15z"/>
                </g>
                </svg>

                <h1>{store[0]?.quality3}</h1>

                <p>{store[0]?.qualitydescription3}</p>
            </div>

            

                <ReactWhatsapp number={`+55${store[0]?.phone}`} message={'Te encontrei pelo seu site e queria saber um pouco mais'}>
                Fale com a gente
                </ReactWhatsapp>
        </div>

        <div className='routine'>
            <h1 style={{ color: color }}>Horário de funcionamento</h1>

            <div className='table'>
            <div className='header' style={{ backgroundColor: color }}>
                Horário de funcionamento
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
                Segunda feira:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.segunda}</h3>
            </div>
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
            Terça feira:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.terca}</h3>
            </div>
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
                Quarta feira:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.quarta}</h3>
            </div>
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
            Quinta feira:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.quinta}</h3>
            </div>
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
            Sexta feira:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.sexta}</h3>
            </div>
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
            Sábado:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.sabado}</h3>
            </div>
            </div>

            <div className='line'>
            <div className='value' style={{ borderRight: '1px solid #000' }}>
            <h1>
            Domingo:
            </h1>
            </div>
            <div className='value'>
            <h3>{store[0]?.domingo}</h3>
            </div>
            </div>
            </div>
            </div>

        <div className='gallery'>
            <h1 style={{ color: color }}>Galeria de fotos</h1>

            {store[0].gallery === '' ? (
                <></>
            ) : (
                <Carousel images={store[0]?.gallery}/>
            )}
        </div>


        <div className='address'>
            <h1 style={{ color: color }}> Endereço </h1>
            <div className='adressWrapper'>
                <div className='userAdress'>
                {street}, {number} - {city}, {state}.
                </div>
                {/* <button style={{ backgroundColor: color }} onClick={() =>  navigator.clipboard.writeText(`${street}, ${number}, ${complement} ${city}, ${state}`)}>Copiar endereço</button> */}


                <button className='buttonCopy' onClick={() =>  navigator.clipboard.writeText(`${street}, ${number}, ${complement} ${city}, ${state}`)}>
                    <div>
                        <span style={{ backgroundColor: color }} >
                            <p>Copiar endereço</p>
                        </span>
                    </div>
                    <div>
                        <span>
                        <p>Endereço copiado!</p>
                        </span>
                    </div>
                </button>


            </div>
        </div>


        <div className='footer'>
            <h3>Copyright © 2022 - Todos os direitos reservados.</h3>
        </div>
    </Container>
 );
}
