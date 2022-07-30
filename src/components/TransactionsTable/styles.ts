import styled from 'styled-components'

export const Container = styled.div `
    margin-top: 4rem;
    

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        max-width: 1120px;
        margin: 0 auto;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
            color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
                font-size: 2rem;
            }

            &.withdraw {
                color: var(--red);
                font-size: 2rem;
            }
        }
    }
        @media (max-width: 768px) {
            padding: 0rem 1rem;
            margin: 0;
            thead {
            display: none;
            }
            table {
            margin-top: 6rem;
            border-spacing: 0 0.5rem;
            padding: 1rem 0rem;
            line-height: 0.5rem;


            }
            table td {
                display: grid;
                grid-template-rows: 1fr;
            }
        }
`