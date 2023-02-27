import styled, { useTheme } from "styled-components";

interface ValueProps{
    StyleValue: string
}

export const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 280px;

    padding: 1.5rem 1.5rem 1.5rem 2rem;
    background-color: ${({ StyleValue }: ValueProps) => {
        const theme = useTheme()
        if(StyleValue === 'entry'){
            return theme["gray-600"]
        } else if(StyleValue === 'leave') {
            return theme["gray-600"]
        } else {
            return theme["green-700"]
        }
    }};
    border-radius: 6px;
    width: 22rem;

    header {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        p {
            color: ${(props) => props.theme['gray-300']};
        }

        svg {
            color: ${({ StyleValue }: ValueProps) => {
                const theme = useTheme()
                if(StyleValue === 'entry'){
                    return theme["green-300"]
                } else if(StyleValue === 'leave') {
                    return theme["red-300"]
                } else {
                    return theme["white"]
                }
            }};
        }
    }

    & > div {
        display: flex;
        gap: 0.6rem;

        margin-top: 0.75rem;

        font-weight: 700;
        font-size: 2rem;
        line-height: 2.8rem;
    }

    & > p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-500']};
    }
`