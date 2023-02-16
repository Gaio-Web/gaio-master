import React, { useEffect } from 'react';
import Loading from 'react-loading';
import { useParams } from 'react-router-dom';

export default function SaveAfi() {
    let {id} = useParams()

    useEffect(() => {
        function send(){
            function save(){
                localStorage.setItem('SistemaUser', JSON.stringify({affiliate: id}))
                window.location.replace('https://api.whatsapp.com/send?phone=5516997265171&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20de%20uma%20indica%C3%A7%C3%A3o');
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