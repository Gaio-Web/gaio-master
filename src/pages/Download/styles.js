import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100vw;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    img{
        max-width: 85%;
        max-height: 250px;

        border-radius: .5rem;

        border: 2px solid #034AA3;

        margin-top: 1rem;
    }

    .finish{
            display: flex;

            width: 254px;
            height: 45px;

            background: #034AA3;
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
`;