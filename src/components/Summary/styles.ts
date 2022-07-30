import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);;
    gap: 2rem;
    margin-top: -7rem; 

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color:var(--text-title);
        box-shadow: 0 0 30px rgba(0,0,0, 0.4);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;            
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
    @media (max-width: 768px) {
        overflow-x: auto;
        grid-template-columns: repeat(3, 300px);
        small {
            display: flex;
            color: var(--text);
            font-size: 0.75rem;
        }
        .totalSmall {
            color: white;
        }
    }
`;