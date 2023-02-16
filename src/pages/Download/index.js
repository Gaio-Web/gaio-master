import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import firebase from '../../services/firebase';

import { FiUpload } from "react-icons/fi";

import  FileSaver from "file-saver";

export default function Download() {
    let { id } = useParams();

    const [image, setImage] = useState('');

    useEffect(() => {

        async function handleImage(){
           const gen = await firebase.firestore().collection('generate').doc(id).get()
           setImage(gen.data().link)
        }

        handleImage()

    },[])

    const handleClick = async () =>{
        await firebase.storage()
        .ref(`images`)
        .child(`product-${id}`)
        .put(image)
        .then( async() => {
          await firebase.storage()
          .ref(`images`)
          .child(`product-${id}`)
          .getDownloadURL()
          .then( async(url) => {
              FileSaver.saveAs(url, 'image.png');
          })
        })


    }

 return (
    <Container>
        <img src={image}/>

        <div className='finish' onClick={handleClick}>
            <FiUpload size={20} color="#fff"/>
            <h1>Salvar imagem</h1>
        </div>
    </Container>
 );
}