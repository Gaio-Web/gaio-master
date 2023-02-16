import React, { useEffect } from 'react';
import Loading from 'react-loading';
import { useParams } from 'react-router-dom';

export default function GetAfi() {
    let {id} = useParams()

    useEffect(() => {
        function send(){
            function save(){
                const storageUser = localStorage.getItem('SistemaUser');
                var user = JSON.parse(storageUser)
                if(user.affiliate === 'gabi'){
                    window.location.replace('https://clkdmg.site/aff/ALAWLWQY/MVREENRD');
                }if(user.affiliate === `Tiago-Gomes`){
                    window.location.replace('https://seguro.meusiteai.shop/aff/ALAWLWQY/MXC9RF9Q');
                }if(user.affiliate === `Bernardo-Alves`){
                    window.location.replace('https://seguro.meusiteai.shop/aff/ALAWLWQY/NJE2PPDG');
                }if(user.affiliate === 'Iam-Monteiro'){
                    window.location.replace('https://seguro.meusiteai.shop/aff/ALAWLWQY/PIWN1UUS');
                }if(user.affiliate === 'Guilherme-alonso'){
                    window.location.replace('https://seguro.meusiteai.shop/aff/ALAWLWQY/REDOTKLF');
                }
            }
            setInterval(save(),1000);
        }

        send()
    },[])

 return (
   <div>
    <Loading/>
   </div>
 );
}
