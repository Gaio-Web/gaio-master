import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100vw;

    flex-direction: column;

    margin-top: 5rem;

    .nav{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: white;
            width: 93vw;
            max-width: 100vw;
            height: fit-content;
            max-height: 7vh;
            min-height: 5.7vh;
            padding: 1rem; 

            box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);
            position: fixed;
            top: 0px;
            transition: top 0.3s;

            z-index: 10;

            h1{
                text-align: center;
                font-weight: bold;
                max-width: 90%;

                @media screen and (max-width: 410px){
                    font-size: 6vw;
                    line-height: 2.6rem;
                }
                @media screen and (max-width: 330px){
                    font-size:18px
                }

                color: #05377C;

                text-align: center;

                line-height: 50px;
        }

            img{
                max-height: 50px;
                max-width: 50vw;
            }
        }

    .header{
        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: #05377C;
        width: 100%;

        h1{
            color: white;
            padding: 2rem 1.5rem 0;

            line-height: 40px;

            text-align: center;
        }

        p{
            font-weight: 500;
            font-size: 17px;

            color: #F0F0F0;

            line-height: 33px;

            margin-top: 2.5rem;

            width: 90%;

            text-align: center;
        }

        img{
            max-width: 85%;
            max-height: 60vh;
            margin-top: 1.5rem;

            border-radius: 1rem;
        }

        button{
            background-color: rgb(41,182,10);
            box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);

            border: 0;

            width: 90%;
            height: 55px;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;

            margin-top: 3rem;
            margin-bottom: 3rem;

            border-radius: 2rem;
            box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);
        }
    }

    .history{
        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: #fff;

        margin-bottom: 3rem;

        h1{
            font-weight: 500;
            font-size: 42px;

            color: #05377C;

            text-align: center;

            line-height: 50px;

            margin-top: 3rem;
        }

        p{
            font-weight: 400;
            font-size: 18px;

            line-height: 33px;

            margin-top: 2rem;

            width: 90%;

            text-align: center;
        }

        img{
            max-width: 85%;
            max-height: 60vh;
            margin-top: 2rem;

            border-radius: 1rem;
        }

        button{
            background-color: rgb(41,182,10);
            box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);

            border: 0;

            width: 90%;
            height: 55px;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;

            margin-top: 2.5rem;

            border-radius: 2rem;
            box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);
        }
    }

    .offer{
        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: #f4f7fa;

        h1{
            font-weight: 500;
            font-size: 42px;

            color: #05377C;

            text-align: center;

            line-height: 50px;

            margin-top: 2rem;

            width: 95%;
        }

        p{
            font-weight: 400;
            font-size: 18px;

            line-height: 33px;

            margin-top: 3rem;

            width: 90%;

            text-align: center;
        }

        img{
            max-width: 85%;
            max-height: 60vh;
            margin-top: 1.5rem;

            border-radius: 1rem;
        }

        button{
            background-color: rgb(41,182,10);
            box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);

            border: 0;

            width: 90%;
            height: 55px;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;

            margin-top: 2.5rem;
            margin-bottom: 2.5rem;

            border-radius: 2rem;
        }
    }

    .qualities{
        display: flex;
        flex-direction: column;

        align-items: center;
        background-color: #fff;

            h1{
                font-weight: 500;
                font-size: 42px;

                color: #05377C;

                text-align: center;

                line-height: 50px;

                margin-top: 3rem;

                width: 95%;
            }

            .card{
                display: flex;

                width: 80%;

                border: 2px solid rgba(136,136,136,.2);
                box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
                border-radius: .5rem;

                flex-direction: column;

                align-items: center;

                margin-top: 2rem;

                padding: 3.5rem 1.5rem;

                svg{
                    width: 70px;
                }

                h1{
                    color: #000;

                    font-weight: 600;

                    font-size: 19px;

                    margin: 0;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }

                p{
                    text-align: center;

                    font-weight: 400;
                    font-size: 16px;

                    width: 90%;

                    line-height: 33px;

                }
            }

            button{
                    background-color: rgb(41,182,10);
                    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
                    
                    border: 0;

                    width: 90%;
                    height: 55px;

                    color: #fff;
                    font-size: 1.2rem;
                    font-weight: 600;
                    text-transform: uppercase;

                    margin-top: 2.5rem;
                    margin-bottom: 2.5rem;

                    border-radius: 2rem;
                }
        }
    

    .routine{
        display: flex;

        flex-direction: column;

        align-items: center;
        background-color: #f4f7fa;

        margin-bottom: 1rem;

        .table{
            max-width: 85vw;

            background-color: #FFFFFF;
            border: 2px solid rgba(136,136,136,.2);
            box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
            border-radius: 15px;

            margin: 2rem 0;
            

            .header{
            display: flex;
            width: 85vw;

            background: #034AA6;

            height: 47px;

            border-radius: 15px 15px 0px 0px;

            padding-top: 1rem;
            padding-bottom: -1rem;

            font-weight: 700;
            font-size: 20px;
            text-align: center;

            color: #FFFFFF;
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
            font-size: 16px;

            color: #000000;
            text-decoration: none;

            margin: 0;
            }

            h3{
                font-weight: 500;
            }

            }
            }

            .line:last-child{
            border: 0;
            }

            }

        h1{
            font-weight: 500;
            font-size: 42px;

            color: #05377C;

            text-align: center;

            line-height: 50px;

            margin-top: 3rem;

            width: 95%;
        }

        p{
            width: 230px;
            font-size: 16px;

            margin-left: -5.75rem;
            margin-top: 1.5rem;

            line-height: 32px;

            margin-bottom: 2rem;
        }
    }

    .gallery{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 1.5rem 1.5rem 0;
        margin: .5rem;
        border: 2px solid rgba(136,136,136,.5);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: 20px;

        z-index: 2;

        li.slide{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: #f4f7fa;

            border: 2px solid #dfe8f1;
            border-radius: 1rem;

            max-height: 80vh;
        }

        li.slide img{
            border-radius: 1rem;
        }

        h1{
            font-weight: 500;
            font-size: 42px;

            color:#05377C;

            text-align: center;

            line-height: 50px;

            margin-bottom: 2rem;
            margin-top: 1rem;

            width: 95%;
        }

        .button{
            background-color: rgb(41,182,10);
            box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);

            border: 0;

            width: 90vw;
            height: 55px;

            color: #fff;
            font-size: 1.2rem;
            font-weight: 600;

            margin-top: 2rem;
            margin-bottom: 2rem;

            border-radius: 2rem;
        }
    }


    .address{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1{
            font-weight: 500;
                font-size: 42px;

                color: #05377C;

                text-align: center;

                line-height: 50px;

                margin: 2.5rem 0 1.5rem;

                width: 95%;
        }
    }

    .adressWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        font-size: 20px;
        text-align: center;
        padding: 1rem 0 0;

        width: 90vw;

        border: 2px solid rgba(136,136,136,.5);
        box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
        border-radius: 20px;

        .buttonCopy {
            outline: 0;
            border: 0;
            display: flex;
            flex-direction: column;
            width: 100.5%;
            max-width: 100.5%;
            height: 50px;
            border-radius: 20px;
            overflow: hidden;
            }

            .buttonCopy div {
            transform: translateY(0px);
            width: 100%;
            border-radius: 20px;
            }

            .buttonCopy,
            .buttonCopy div {
            transition: 0.6s cubic-bezier(.16,1,.3,1);
            border-radius: 20px;
            }

            .buttonCopy div span {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 100.5%;
            border-radius: 20px;
            }

            .buttonCopy div:nth-child(1) {
            background-color: #1e90ff;
            border-radius: 20px;
            }

            .buttonCopy div:nth-child(2) {
            background-color: #29B60A;
            border-radius: 20px;
            }

            .buttonCopy:hover {
            box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
            border-radius: 20px;
            }

            .buttonCopy:hover div {
            transform: translateY(-50px);
            border-radius: 20px;
            }

            .buttonCopy p {
            text-align: center;
            font-size: 17px;
            font-weight: bold;
            color: #ffffff;
            }

            .buttonCopy:active {
            transform: scale(0.95);
            border-radius: 20px;
            }

        .userAdress{
            padding: 1rem 1rem 2rem;
            line-height: 2.5rem;
        }
        
    }

    .footer{
        display: flex;

        padding: 1rem 0;
        margin-top: .5rem;

        flex-direction: column;

        align-items: center;
        justify-content: center;

        background: #fff;

        h1{
            font-size: 16px;

            color: #05377C;

            display: flex;

            align-items: center;

            img{
                width: 60px;
                padding-left: .5rem;
            }
        }

        a{
            text-decoration: underline;
            color: #05377C;

            margin-top: .8rem;
        }

        h3{
            font-weight: 400;

            text-align: center;

            margin-top: .5rem;

            font-size: 12px;
        }
    }
`;

