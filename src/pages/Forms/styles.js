import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100vw;

    flex-direction: column;

    .header{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;
        
        img{
            width: 110px;
            margin-top: 3rem;
            display: none;
        }

        h1{
            font-weight: 700;
            font-size: 20px;
            text-align: center;

            color: #034AA6;
            margin: 0;
            margin-top: 3.5rem;
        }

        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 25px;

            text-align: center;

            color: #000000;

            margin: 2rem 1rem;
        }
    }

    /*LOGO PERSONALIZADA*/
    .logo{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;
        
        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        margin: 0 .5rem;
        padding: 1rem;
        
        h1{
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            text-align: center;

            color: #034AA6;
            margin-top: 2rem;
        }

        .options{
            display: flex;

            width: 80%;

            justify-content: center;
            align-items: center;    

            margin-top: 3rem;
            gap: 1rem;

            button{
                padding: 0 4rem;
                height: 52px;

                background: #034AA3;
                border-radius: 30px;

                font-weight: 700;
                font-size: 20px;
                line-height: 29px;

                text-align: center;

                color: #FFFFFF;
            }
        }

        p{
                font-weight: 400;
                font-size: 16px;
                line-height: 25px;

                text-align: center;

                color: #000000;

                margin-top: 2rem;
                margin-bottom: 1rem;
        }

        .custom-file-upload {
            background: #034AA3;
            border-radius: 30px;

            color: white;
            font-weight: bold;

            border: 0;

            padding: .5rem;
            cursor: pointer;

            display: flex;
            align-items: center;

            justify-content: center;

            height: 40px;
            width: 85%;

            margin-top: 3rem;
            margin-bottom: 3rem;

            svg{
                margin-right: 1rem;
            }

            input[type="file"]{
                display: none;
            }
        }
        
        img{
            max-width: 285px;
            max-height: 150px;
            border: 2px solid #034AA3;
            border-radius: 18px;

            margin-bottom: 2rem;
        }
    }


    /*EDITAR CORES*/
    .colorized{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;

        padding: 1rem;
        margin: 1rem .5rem;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            text-align: center;

            color: #034AA6;

            padding: 1rem 0;
        }

        .stay{
            width: 318px;
            height: 52px;

            background: #034AA3;
            border-radius: 30px;

            font-weight: 700;
            font-size: 20px;

            text-align: center;

            color: #FFFFFF;

            border: 0;

            margin: 1rem 0;

            :hover{
                background: #16B641;
            }
        }

        .change{
            width: 318px;
            height: 52px;

            background: #034AA3;
            border-radius: 30px;

            font-weight: 700;
            font-size: 20px;

            text-align: center;

            color: #FFFFFF;

            border: 0;
            margin: 1rem 0;

            :hover{
                background: #16B641;
            }
        }
    }




    .linked{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;

        padding: 1rem;
        margin: 1rem .5rem;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            text-align: center;

            color: #034AA6;

            padding: 1rem 0;
        }

        h2{
            font-weight: 600;
            font-size: 16px;

            text-align: center;

            color: #034AA6;

            margin-top: 2rem;
        }

        .stay{
            width: 318px;
            height: 52px;

            background: #034AA3;
            border-radius: 30px;

            font-weight: 700;
            font-size: 18px;

            text-align: center;

            color: #FFFFFF;

            border: 0;

            margin: 1rem 0;

            :hover{
                background: #16B641;
            }
        }

        .change{
            width: 318px;
            height: 52px;

            background: #034AA3;
            border-radius: 30px;

            font-weight: 700;
            font-size: 18px;

            text-align: center;

            color: #FFFFFF;

            border: 0;
            margin: 1rem 0;

            :hover{
                background: #16B641;
            }
        }

        input{
                width: 329px;
                height: 48px;

                background: #FFFFFF;
                border: 1px solid #646262;
                border-radius: 15px;

                padding-left: 1rem;

                margin-top: 2rem;

                font-size: 22px;
            }
    }





    .color-picker{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #034AA6;

        padding: 1rem; 

        h1{
            font-weight: 700;
            font-size: 20px;
            line-height: 29px;

            padding: 1rem 0;

            text-align: center;

            color: #FFFFFF;
        }

        .options{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 359px;
            height: 46vh;

            padding: 2rem 0;

            background: #FFFFFF;
            border-radius: 10px;

            flex-wrap: wrap;

            .selected{
                display: flex;

                width: 69px;

                justify-content: center;
                align-items: center;

                flex-direction: column;

                margin: 0 .5rem;

                .color-option{
                    width: 44.12px;
                    height: 44.12px;
                    border-radius: 10.2609px;
                }

                h1{
                    font-weight: 400;
                    font-size: 14px;

                    color: #000000;

                    text-align: center;

                    padding-bottom: 0;
                }
            }

            .non-selected{
                display: flex;

                width: 69px;

                justify-content: center;
                align-items: center;

                flex-direction: column;

                margin-left: 1rem;

                .color-option{
                    width: 44.12px;
                    height: 44.12px;
                    border-radius: 10.2609px;

                    border: 2px solid #034AA6;
                }

                h1{
                    font-weight: 400;
                    font-size: 14px;

                    color: #000000;

                    text-align: center;

                    padding-bottom: 0;
                }
            }
        }

        p{
            font-weight: 700;
            font-size: 16px;
            line-height: 39px;
            
            text-align: center;

            text-decoration-line: underline;

            color: #FFFFFF;

            padding: 1rem;
        }
    }

    /*ENDEREÇO*/
    .address{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;

        padding: 1rem;
        margin: 1rem .5rem;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            text-align: center;

            color: #034AA6;

            margin: 1rem;
        }

        .inline{
            display: flex;

            align-items: space-between;
            justify-content: center;
            gap: 2.6rem;

            width: 89%;

            .forms{
            display: flex;

            justify-content: center;
            align-items: start;

            flex-direction: column;

            margin-bottom: .5rem;
            margin-top: .5rem;

            label{
                font-weight: 500;
                font-size: 16px;

                text-align: center;

                color: #000000;

                margin-left: .5rem;
                margin-bottom: .5rem;
            }

            input{
                width: 139px;
                height: 48px;

                background: #FFFFFF;
                border: 1px solid #646262;
                border-radius: 15px;

                padding-left: 1rem;
            }
        }
        }

        .forms{
            display: flex;

            justify-content: center;
            align-items: start;

            flex-direction: column;

            margin-bottom: .5rem;
            margin-top: .5rem;

            label{
                font-weight: 500;
                font-size: 16px;

                text-align: center;

                color: #000000;

                margin-left: .5rem;
                margin-bottom: .5rem;
            }

            input{
                width: 329px;
                height: 48px;

                background: #FFFFFF;
                border: 1px solid #646262;
                border-radius: 15px;

                padding-left: 1rem;
            }
        }
    }

    /*TITULO EDIÇÃO DE IMAGENS*/
    .editImage{
        padding: 1rem;
        margin: 1rem .5rem;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;
    }

    .imageUploadTitle{
        padding: 1rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            color: #034AA6;

            text-align: center;
        }
    }

    .back{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        padding: 1rem;
        margin: 1rem 0;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            text-decoration-line: underline;

            color: #034AA6;

            margin-top: 2rem;
        }

        p{
            font-weight: 400;
            font-size: 16px;

            text-align: center;

            color: #000000;

            margin-top: 2rem;
        }

        img{
            width: 100%;
            max-width: 319.48px;

            border-radius: 22px;
            margin-top: 2rem;
        }

        .custom-file-upload {
            background: #034AA3;
            border-radius: 30px;

            color: white;
            font-weight: bold;

            border: 0;

            padding: .5rem 2rem;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            height: 40px;
            width: 85%;

            margin-top: 3rem;
            margin-bottom: 3rem;

            svg{
                margin-right: 1rem;
            }

            input[type="file"]{
                display: none;
            }
        }
    }

    .history{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;

        padding: 1rem;
        margin: 1rem 0;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            text-decoration-line: underline;

            color: #034AA6;

            margin-top: 2rem;
        }

        p{
            font-weight: 400;
            font-size: 16px;

            text-align: center;

            color: #000000;

            margin-top: 2rem;
        }

        img{
            width: 100%;
            max-width: 319.48px;

            border-radius: 22px;
            margin-top: 2rem;
        }

        .custom-file-upload {
            background: #034AA3;
            border-radius: 30px;

            color: white;
            font-weight: bold;

            border: 0;

            padding: .5rem 2rem;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            height: 40px;
            width: 85%;

            max-width: 350px;

            margin-top: 3rem;
            margin-bottom: 3rem;

            svg{
                margin-right: 1rem;
            }

            input[type="file"]{
                display: none;
            }
        }
    }

    .offer{
            display: flex;

            flex-direction: column;

            justify-content: center;
            align-items: center;

            padding: 1rem;
            margin: 1rem 0;

            border: 2px solid rgba(136,136,136,.2);
            box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
            border-radius: .5rem;

            h1{
                font-weight: 700;
                font-size: 28px;
                text-decoration-line: underline;
                text-align: center;

                color: #034AA6;

                margin-top: 2rem;
            }

            p{
                font-weight: 400;
                font-size: 16px;

                text-align: center;

                color: #000000;

                margin-top: 2rem;
            }

            img{
                width: 100%;
                max-width: 319.48px;

                border-radius: 22px;
                margin-top: 2rem;
            }

            .custom-file-upload {
                background: #034AA3;
                border-radius: 30px;

                color: white;
                font-weight: bold;

                border: 0;

                padding: .5rem 2rem;
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;

                height: 40px;
                width: 85%;

                margin-top: 3rem;
                margin-bottom: 3rem;

                svg{
                    margin-right: 1rem;
                }

                input[type="file"]{
                    display: none;
                }
            }
    }

    .gallery{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;

        padding: 1rem;
        margin: 1rem 0;

        border: 2px solid rgba(136,136,136,.2);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: .5rem;

        h1{
            font-weight: 700;
            font-size: 28px;
            text-decoration-line: underline;

            color: #034AA6;

            margin-top: 2rem;
        }

        p{
            font-weight: 400;
            font-size: 16px;

            text-align: center;

            color: #000000;

            margin-top: 2rem;
        }

        img{
            width: 100%;
            max-width: 319.48px;

            border-radius: 22px;
            margin-top: 2rem;
        }

        .custom-file-upload {
            background: #034AA3;
            border-radius: 30px;

            color: white;
            font-weight: bold;

            border: 0;

            padding: .5rem 2rem;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            height: 40px;
            width: 85%;

            max-width: 350px;

            margin-top: 3rem;
            margin-bottom: 3rem;

            svg{
                margin-right: 1rem;
            }

            input[type="file"]{
                display: none;
            }
        }
    }

    /*HORÁRIO DE FUNCIONAMENTO*/
    .routine{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        h1{
            font-weight: 700;
            font-size: 28px;
            padding: .5rem;
            text-decoration-line: underline;
            text-align: center;

            color: #034AA6;

            margin: 1rem 0 2rem;
        }

        .tableWrapper{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-bottom: 2rem;
            gap: 1rem;

            background-color: #BDCFFF;
            border-radius: 20px;
        }

        .table{
            max-width: 60%;

            background: #F4F7FA;
            border-radius: 15px;

            margin-top: 2rem;

            .header{
                display: flex;

                background: #034AA6;

                height: 47px;

                border-radius: 15px 15px 0px 0px;

                padding: 1rem;

                h2{
                    font-weight: 700;
                    font-size: 16px;
                    text-align: center;

                    color: #FFFFFF;

                }
            }

            .line{
                display: flex;

                align-items: center;

                width: 100%;

                border-bottom: 1px solid #000;

                .value{
                    display: flex;

                    width: 50%;
                    height: 60px;

                    align-items: center;
                    justify-content: center;

                    h1{
                        font-weight: 700;
                        font-size: 12px;

                        color: #000000;
                        text-decoration: none;

                        margin: 0;
                    }

                    input{
                        border: 0;

                        background: transparent;

                        max-width: 80%;

                        padding: 0;
                        margin: 0;
                        margin-left: -.5rem;
                        text-align: center;
                    }
                }
            }

            .line:last-child{
                border: 0;
            }

        }


    /*CHECKBOXES*/
        .options{
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
        }

        .optionsHeader{
            display: flex;
            flex-direction: row;

            padding: 1.7rem 0;

            h4{
                padding: .3rem;
                color: #034AA6;
                text-decoration: underline;
            }
        }

        .optionsWrapper{
            display: flex;
            flex-direction: column;
            gap: 3.3rem;
        }

        .checkboxWrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;
        }

        .checkboxWrapper label{
            display: block;
            width: 15px;
            height: 15px;
        }

        .checkboxWrapper input{
            position: absolute;
            transform: scale(0);
        }

            input:checked ~ .checkbox{
                transform: rotate(45deg);
                height: 22px;
                margin-left: 0px;
                border-color: #16B641;
                border-top-color: transparent;
                border-left-color: transparent;
                border-radius: 0;
            }   

            .checkbox{
                display: block;
                width: inherit;
                height: inherit;
                border: 2px solid #434343;
                border-radius: 3px;
                transition: all .45s;
            }


        
        .finish{
            display: flex;

            width: 304px;
            height: 52px;

            background: #0CC63E;
            border-radius: 30px;

            margin-top: 4rem;
            margin-bottom: 2rem;

            justify-content: center;
            align-items: center;

            h1{
                margin: 0;
                padding: 0;

                font-weight: 700;
                font-size: 14px;

                color: #FFFFFF;

                text-decoration: none;

                margin-left: .5rem;
            }
        }
    }

    .footer{
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background: #F4F7FA;

        padding: 0 0 2rem;

        img{
            width: 110px;
            margin-bottom: .5rem;

            display: none;
        }

        p{
            margin-top: 1rem;
        }

        .footerCNPJ{
                display: none;
            }
    }
`;