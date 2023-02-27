import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme['gray-900']};

    @media (max-width: 70rem) {
        & {
            padding: 0 1.5rem 0 1.5rem;
        }
    }

    & > div {
        width: 70rem;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 2.5rem;
        margin-bottom: 7.625rem;

        & > div {
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
                width: 2.5rem;
                height: 2.375rem;
            }
        }

        & > button {
        background-color: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme['white']};
        padding: 0.75rem 1.25rem 0.75rem 1.25rem;

        border: 0;
        border-radius: 6px;
        
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.6rem;

        cursor: pointer;
        }

        & > button:hover {
            background-color: ${(props) => props.theme['green-300']};
            transition: background-color 0.5s;
        }
    }
`