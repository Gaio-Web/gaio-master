import React, { useState } from 'react';
import { Container } from './styles';

import gaio from '../../assets/logo-gaio.png';

import foto1 from '../../assets/foto1.png'
import foto2 from '../../assets/foto2.png'
import foto3 from '../../assets/foto3.png'

import { FiUpload, FiSend } from "react-icons/fi";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import InputMask from "react-input-mask";

import firebase from '../../services/firebase'
import { useParams } from 'react-router-dom';

import ReactLoading from 'react-loading'

import SendButton1 from '../../sendButton/index.js'

export default function Forms() {
 let { id } = useParams();

 const [backPhoto, setBackPhoto] = useState('');
 const [loading, setLoading] = useState(false);

 const handleFileBack = async(ev) => {
    const image = ev.target.files[0];

     setLoading(true)
     await firebase.storage()
      .ref(`images`)
      .child(`back-${id}`)
      .put(image)
      .then( async() => {
        await firebase.storage()
        .ref(`images`)
        .child(`back-${id}`)
        .getDownloadURL()
        .then( async(url) => {
          setBackPhoto(url)
          setLoading(false)
        })
      })
 };

 const [historyPhoto, setHistoryPhoto] = useState('');
 const [loading2, setLoading2] = useState(false);

 const handleFileHist = async(ev) => {
    const image = ev.target.files[0];

     setLoading(true)
     await firebase.storage()
      .ref(`images`)
      .child(`hist-${id}`)
      .put(image)
      .then( async() => {
        await firebase.storage()
        .ref(`images`)
        .child(`hist-${id}`)
        .getDownloadURL()
        .then( async(url) => {
          setHistoryPhoto(url)
          setLoading2(false)
        })
      })
 };

 const [offerPhoto, setOfferPhoto] = useState('');
 const [loading3, setLoading3] = useState(false);

 const handleFileOffer = async(ev) => {
    const image = ev.target.files[0];

     setLoading3(true)
     await firebase.storage()
      .ref(`images`)
      .child(`offer-${id}`)
      .put(image)
      .then( async() => {
        await firebase.storage()
        .ref(`images`)
        .child(`offer-${id}`)
        .getDownloadURL()
        .then( async(url) => {
          setOfferPhoto(url)
          setLoading3(false)
        })
      })
 };

 const [galleryPhoto, setGalleryPhoto] = useState('');
 const [loading4, setLoading4] = useState(false);

 const handleFileGallery = async(ev) => {
    const image = ev.target.files;

    setLoading4(true)

    await firebase.storage()
    .ref(`images`)
    .child(`gallery-${id}-${image[0].name}`)
    .put(image[0])
    .then( async() => {
      await firebase.storage()
      .ref(`images`)
      .child(`gallery-${id}-${image[0].name}`)
      .getDownloadURL()
      .then( async(url) => {
        setGalleryPhoto([url])
        setLoading4(false)
      })
    })
    if(image[1] != undefined){
        setLoading4(true)
        await firebase.storage()
        .ref(`images`)
        .child(`gallery-${id}-${image[1].name}`)
        .put(image[1])
        .then( async() => {
          await firebase.storage()
          .ref(`images`)
          .child(`gallery-${id}-${image[1].name}`)
          .getDownloadURL()
          .then( async(url) => {
            setGalleryPhoto(oldArray => [...oldArray, url])
            setLoading4(false)
          })
        })
    }
    if(image[2] != undefined){
        setLoading4(true)
        await firebase.storage()
        .ref(`images`)
        .child(`gallery-${id}-${image[2].name}`)
        .put(image[2])
        .then( async() => {
          await firebase.storage()
          .ref(`images`)
          .child(`gallery-${id}-${image[2].name}`)
          .getDownloadURL()
          .then( async(url) => {
            setGalleryPhoto(oldArray => [...oldArray, url])
            setLoading4(false)
          })
        })
    }
    if(image[3] != undefined){
        setLoading4(true)
        await firebase.storage()
        .ref(`images`)
        .child(`gallery-${id}-${image[3].name}`)
        .put(image[3])
        .then( async() => {
          await firebase.storage()
          .ref(`images`)
          .child(`gallery-${id}-${image[3].name}`)
          .getDownloadURL()
          .then( async(url) => {
            setGalleryPhoto(oldArray => [...oldArray, url])
            setLoading4(false)
          })
        })
    }
    if(image[4] != undefined){
        setLoading4(true)
        await firebase.storage()
        .ref(`images`)
        .child(`gallery-${id}-${image[4].name}`)
        .put(image[4])
        .then( async() => {
          await firebase.storage()
          .ref(`images`)
          .child(`gallery-${id}-${image[4].name}`)
          .getDownloadURL()
          .then( async(url) => {
            setGalleryPhoto(oldArray => [...oldArray, url])
            setLoading4(false)
          })
        })
    }
};

const [segunda, setSegunda] = useState('');
const [terca, setTerca] = useState('');
const [quarta, setQuarta] = useState('');
const [quinta, setQuinta] = useState('');
const [sexta, setSexta] = useState('');
const [sabado, setSabado] = useState('');
const [domingo, setDomingo] = useState('');

const [disabledSeg, setDisabledSeg] = useState(false);
const [disabledTer, setDisabledTer] = useState(false);
const [disabledQuar, setDisabledQuar] = useState(false);
const [disabledQuin, setDisabledQuin] = useState(false);
const [disabledSex, setDisabledSex] = useState(false);
const [disabledSab, setDisabledSab] = useState(false);
const [disabledDom, setDisabledDom] = useState(false);

const [logo, setLogo] = useState('');
const [loading5, setLoading5] = useState(false);
const [selectLogo, setSelectLogo] = useState(false);

const handleFileLogo = async(ev) => {
    const image = ev.target.files[0];

     setLoading5(true)
     await firebase.storage()
      .ref(`images`)
      .child(`logo-${id}`)
      .put(image)
      .then( async() => {
        await firebase.storage()
        .ref(`images`)
        .child(`logo-${id}`)
        .getDownloadURL()
        .then( async(url) => {
          setLogo(url)
          setLoading5(false)
        })
      })
};

const [colorized, setColorized] = useState(false);
const [color, setColor] = useState('rgb(5, 55, 124)');

const [options, setoptions] = useState([
    {color: "#EB596E", title: 'Carmine'},
    {color: "#F4972B", title: 'Laranja'},
    {color: "#FD3997", title: 'Rosa'},
    {color: "#5E8B7E", title: 'Verde'},
    {color: "#00ADB5", title: 'Azul'},
    {color: "#6868AC", title: 'Lilás'},
    {color: "#6B0BE6", title: "Roxo"},
    {color: "#000", title: "Preto"},
    {color: "#B4A5A5", title: 'Areia'},
    {color: "#D80C0C", title: 'Vermelho'},
    {color: "#25D8A7", title: "Turquesa"},
    {color: "#6D6D6D", title: "Cinza"}
])

const [phone, setPhone] = useState('')

async function handleSubmit(){
    if(backPhoto != ''){
        await firebase.firestore().collection('store').doc(id).update({
            backPhoto,
        })
    }
    if(historyPhoto != ''){
        await firebase.firestore().collection('store').doc(id).update({
            historyPhoto,
        })
    }
    if(offerPhoto != ''){
        await firebase.firestore().collection('store').doc(id).update({
            offerPhoto,
        })
    }
    if(galleryPhoto != ''){
        await firebase.firestore().collection('store').doc(id).update({
            gallery: galleryPhoto,
        })
    }

    if(segunda != ''){
        await firebase.firestore().collection('store').doc(id).update({
            segunda
        })
    }

    if(terca != ''){
        await firebase.firestore().collection('store').doc(id).update({
            terca
        })
    }

    if(quarta != ''){
        await firebase.firestore().collection('store').doc(id).update({
            quarta
        })
    }

    if(quinta != ''){
        await firebase.firestore().collection('store').doc(id).update({
            quinta
        })
    }

    if(sexta != ''){
        await firebase.firestore().collection('store').doc(id).update({
            sexta
        })
    }

    if(sabado != ''){
        await firebase.firestore().collection('store').doc(id).update({
            sabado
        })
    }

    if(domingo != ''){
        await firebase.firestore().collection('store').doc(id).update({
            domingo
        })
    }

    if(logo != ''){
        await firebase.firestore().collection('store').doc(id).update({
            logo
        })
    }

    if(color != ''){
        await firebase.firestore().collection('store').doc(id).update({
            color
        })
    }

    if(street != ''){
        await firebase.firestore().collection('store').doc(id).update({
            street
        })
    }

    if(number != ''){
        await firebase.firestore().collection('store').doc(id).update({
            number
        })
    }

    if(state != ''){
        await firebase.firestore().collection('store').doc(id).update({
            state
        })
    }

    if(complement != ''){
        await firebase.firestore().collection('store').doc(id).update({
            complement
        })
    }

    if(city != ''){
        await firebase.firestore().collection('store').doc(id).update({
            city
        })
    }

    if(phone != ''){
        const telefoneFormatado = phone;
        const telefoneSemFormatacao = telefoneFormatado.replace(/\D/g, '');
        await firebase.firestore().collection('store').doc(id).update({
            phone: telefoneSemFormatacao
        })
    }
    var getData = firebase.firestore().collection('store').doc(id).get()
    let newString = getData.data().name.replace(/ /g, "-");
    window.location.replace(`www.sitegaio.com.br/${newString}`)
}

const [ street, setStreet ] = useState('');
const [ state, setState ] = useState('');
const [ number, setNumber ] = useState('');
const [ complement, setComplement ] = useState('');
const [city, setCity] = useState('');

const getAddress = async (res) => {
    const cepvalid = res?.target.value.replace(/[^0-9]/g, '');

    if (cepvalid?.length !== 8) {
      return;
    }  

    await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setStreet(`${data.logradouro}`);
        setState(data.uf)
        setCity(data.localidade)
      });
}

    function handlesegundafec(){
        if(segunda === 'fechado'){
            setSegunda('')
        }else{
            setSegunda('Fechado');
            setDisabledSeg(true)
        }
    }

    function handlesegunda24(){
        if(segunda === '24hrs'){
            setSegunda('')
        }else{
            setSegunda('24 horas');
            setDisabledSeg(true)
        }
    }

    function handletercfec(){
        if(terca === 'fechado'){
            setTerca('')
        }else{
            setTerca('Fechado');
            setDisabledTer(true)
        }
    }

    function handleterc24(){
        if(terca === '24hrs'){
            setTerca('')
        }else{
            setTerca('24 horas');
            setDisabledTer(true)
        }
    }

    function handlequartafec(){
        if(quarta === 'fechado'){
            setQuarta('')
        }else{
            setQuarta('Fechado');
            setDisabledQuar(true)
        }
    }

    function handlequarta24(){
        if(quarta === '24hrs'){
            setQuarta('')
        }else{
            setQuarta('24 horas');
            setDisabledQuar(true)
        }
    }

    function handlequintafec(){
        if(quinta === 'fechado'){
            setQuinta('')
        }else{
            setQuinta('Fechado');
            setDisabledQuin(true)
        }
    }

    function handlequinta24(){
        if(quinta === '24hrs'){
            setQuinta('')
        }else{
            setQuinta('24 horas');
            setDisabledQuin(true)
        }
    }

    function handlesextafec(){
        if(sexta === 'fechado'){
            setSexta('')
        }else{
            setSexta('Fechado');
            setDisabledSex(true)
        }
    }

    function handlesexta24(){
        if(sexta === '24hrs'){
            setSexta('')
        }else{
            setSexta('24 horas');
            setDisabledSex(true)
        }
    }

    function handlesabadofec(){
        if(sabado === 'fechado'){
            setSabado('')
        }else{
            setSabado('Fechado');
            setDisabledSab(true)
        }
    }

    function handlesabado24(){
        if(sabado === '24hrs'){
            setSabado('')
        }else{
            setSabado('24 horas');
            setDisabledSab(true)
        }
    }

    function handledomingofec(){
        if(domingo === 'fechado'){
            setDomingo('')
        }else{
            setDomingo('Fechado');
            setDisabledDom(true)
        }
    }

    function handledomingo24(){
        if(domingo === '24hrs'){
            setDomingo('')
        }else{
            setDomingo('24 horas');
            setDisabledDom(true)
        }
    }

 return (
    <Container>
        <div className='header'>
            <img src={gaio}/>

            <h1>Obrigado por confiar no nosso serviço!</h1>

            <p>Agora, vamos finalizar seu site cadastrando suas fotos e horário de funcionamento.</p>
        </div>

        <div className='logo'>
            <h1>Você tem uma logo que gostaria de usar no site?</h1>

            <div className='options'>
                <button onClick={() => setSelectLogo(true)}>SIM</button>
                <button onClick={() => setSelectLogo(false)}>NÃO</button>
            </div>

            <p>Sua logo vai subsituir o nome da loja no cabeçalho do site</p>

            {selectLogo === false ? (
                <></>
            ) : (
                <>
                <label className="custom-file-upload">
                    <FiUpload color={'#fff'} size={24}/>
                    <input
                    type="file" onChange={handleFileLogo} accept="image/png, image/jpeg"/>
                    Fazer upload da logo
                </label>

                {loading5 == true ?
                <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                : 
                <>
                {logo != '' && <img src={logo}/>}
                </>
                }

                </>
            )}
        </div>

        <div className='colorized'>
            <h1>Deseja editar a cor do site ou manter o azul original?</h1>

            <button className='stay' onClick={() => setColorized(false)}>
            Manter original
            </button>

            <button className='change' onClick={() => setColorized(true)}>
            Editar cores
            </button>
        </div>

        {colorized === true ? (
                    <div className='color-picker' style={{ backgroundColor: color }}>
                    <h1>Escolha a cor dominante do seu site</h1>
                    
                    <div className='options'>
                        {options.map(opt => (
                        <div className={color === opt.color ? 'non-selected' : 'selected'} onClick={() => setColor(opt.color)}>
                            <div className='color-option' style={{ backgroundColor: opt.color }}/>
                            <h1>{opt.title}</h1>
                        </div>
                        ))}
                    </div>
        
                    <p>Não se esqueça que o texto dessa tela é branco.</p>
                </div>
        ) : (
            <></>
        )}

        <div className='address'>
            <h1>Vamos editar seu endereco</h1>

            <div className='forms'>
                <label>Seu CEP:</label>
                <InputMask
                mask={'99999-999'}
                onChange={getAddress}
                />
            </div>

            <div className='forms'>
                <label>Rua:</label>
                <input
                value={street}
                onChange={(text) => setStreet(text.target.value)}
                />
            </div>

            <div className='inline'>
                <div className='forms'>
                    <label>Estado:</label>
                    <input
                    value={state}
                    onChange={(text) => setState(text.target.value)}/>
                </div>

                <div className='forms'>
                    <label>Numero:</label>
                    <input 
                    value={number}
                    onChange={(text) => setNumber(text.target.value)}/>
                </div>
            </div>

            <div className='forms'>
                <label>Complemento:</label>
                <input
                value={complement}
                onChange={(text) => setComplement(text.target.value)}
                />
            </div>
        </div>

        <div className='linked'>
            <h1>Deseja adicionar um link aos botões ou manter enviando para seu WhatsApp?</h1>

            <button className='stay'>
            Manter WhatsApp atual
            </button>

            <button className='change'>
            Trocar número de WhatsApp
            </button>

            <h2>Digite o novo número de WhatsApp.</h2>

            <InputMask
                mask={'(99)99999-9999'}
                value={phone}
                onChange={text => setPhone(text.target.value)}
            />
        </div>

        <section className='editImage'>
            <div className='imageUploadTitle'>
                <h1>Vamos editar as imagens do seu site</h1>
            </div>

            <div className='back'>
                <h1>Foto de capa</h1>

                <p style={{ marginBottom: '2rem' }}>A foto que vem depois da descrição do seu negócio.</p>

                {loading == true ?
                    <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                : 
                <>
                    {backPhoto === '' ? <img src={foto1}/> : <img src={backPhoto}/>}
                </>
                }

                <label className="custom-file-upload">
                    <FiUpload color={'#fff'} size={24}/>
                    <input
                    type="file"
                    onChange={handleFileBack}/>
                    Fazer upload da foto de capa
                </label>
            </div>

            <div className='history'>
                <h1>Foto da sua história</h1>

                <p>A foto que vem depois da sua história no site.</p>

                {loading2 == true ?
                    <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                : 
                <>
                    {historyPhoto === '' ? <img src={foto2}/> : <img src={historyPhoto}/>}
                </>
                }

                <label className="custom-file-upload">
                    <FiUpload color={'#fff'} size={24}/>
                    <input
                    type="file"
                    onChange={handleFileHist}/>
                    Fazer upload da foto história 
                </label>
            </div>

            <div className='offer'>
                <h1>Foto do que você oferece </h1>

                <p>Foto do seu produto ou serviço. Uma foto que desperte interesse ou mostre a qualidade do que você oferece</p>

                {loading3 == true ?
                    <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                : 
                <>
                    {offerPhoto === '' ? <img src={foto3}/> : <img src={offerPhoto}/>}
                </>
                }

                <label className="custom-file-upload">
                    <FiUpload color={'#fff'} size={24}/>
                    <input
                    type="file" onChange={handleFileOffer}/>
                    Foto do produto ou serviço
                </label>
            </div>

            <div className='gallery'>
                <h1>Fotos para a galeria</h1>

                <p>Fotos do local, atendimento, produtos, funcionários, eventos, etc. A intenção é mostrar para o cliente o valor do seu produto ou serviço</p>

                {loading4 === true ? 
                <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                : <>
                    {galleryPhoto === '' ? 
                    <Carousel showThumbs={false} showStatus={false} width={'100%'}>
                                <div>
                                    <img src="https://cdn.greatsoftwares.com.br/arquivos/paginas_editor/23207-aada3199db359192f28f66526e8c3834.png" />
                                </div>
                                <div>
                                    <img src="https://cdn.greatsoftwares.com.br/arquivos/paginas_editor/23207-aada3199db359192f28f66526e8c3834.png" />
                                </div>
                                <div>
                                    <img src="https://cdn.greatsoftwares.com.br/arquivos/paginas_editor/23207-aada3199db359192f28f66526e8c3834.png" />
                                </div>
                        </Carousel>
                :   
                    <Carousel showThumbs={false} showStatus={false} width={'100%'}>
                        {galleryPhoto.map(photo => (
                        <div>
                            <img src={photo}/>
                        </div> 
                        ))}
                    </Carousel>}
                </>}

                <label className="custom-file-upload">
                    <FiUpload color={'#fff'} size={24}/>
                    <input
                    type="file" onChange={handleFileGallery} multiple="multiple"/>
                    Foto do produto ou serviço
                </label>
            </div>
        </section>


        <div className='routine'>
            <h1>Horário de funcionamento</h1>

            <div className='tableWrapper'>
                <div className='table'>
                    <div className='header'>
                        <h2>Horário de funcionamento</h2>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Segunda feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={segunda}
                            onChange={text => setSegunda(text.target.value)}
                            disabled={disabledSeg}
                            style={ disabledSeg === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Terça feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={terca}
                            onChange={text => setTerca(text.target.value)}
                            disabled={disabledTer}
                            style={ disabledTer === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Quarta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={quarta}
                            onChange={text => setQuarta(text.target.value)}
                            disabled={disabledQuar}
                            style={ disabledQuar === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Quinta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={quinta}
                            onChange={text => setQuinta(text.target.value)}
                            disabled={disabledQuin}
                            style={ disabledQuin === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Sexta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={sexta}
                            onChange={text => setSexta(text.target.value)}
                            disabled={disabledSex}
                            style={ disabledSex === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Sábado:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={sabado}
                            onChange={text => setSabado(text.target.value)}
                            disabled={disabledSab}
                            style={ disabledSab === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Domingo:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={domingo}
                            onChange={text => setDomingo(text.target.value)}
                            disabled={disabledDom}
                            style={ disabledDom === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className='options'>
                    <div className='optionsHeader'>
                        <h4>24hrs</h4>
                        <h4>Fechado</h4>
                    </div>
                    <div className='optionsWrapper'>
                    <div className='checkboxWrapper' id='segunda'>
                        <label>
                            <input type="checkbox" onClick={handlesegunda24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlesegundafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='terca'>
                        <label>
                            <input type="checkbox" onClick={handleterc24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handletercfec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='quarta'>
                        <label>
                            <input type="checkbox" onClick={handlequarta24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlequartafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='quinta'>
                        <label>
                            <input type="checkbox" onClick={handlequinta24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlequintafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='sexta'>
                        <label>
                            <input type="checkbox" onClick={handlesexta24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlesextafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='sabado'>
                       <label>
                            <input type="checkbox" onClick={handlesabado24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlesabadofec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='domingo'>
                        <label>
                            <input type="checkbox" onClick={handledomingo24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handledomingofec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    </div>
                </div>
            </div>

            <SendButton1 submit={handleSubmit}/>

        </div>

        <div className='footer'>
            <img src={gaio}/>

            <p>Copyright © 2022 - Todos os direitos reservados.</p>
            
            <p className='footerCNPJ'>CNPJ: 43.023.462/0001-37</p>
        </div>
    </Container>
 );
}
