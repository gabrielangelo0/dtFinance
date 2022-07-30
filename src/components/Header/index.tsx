import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNeewTransactionModal: () => void;
}

export function Header ({ onOpenNeewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
            <img src={ logoImg } alt="dt money" />
            <button 
                type="button"
                onClick={ onOpenNeewTransactionModal }
            >
                Nova transaçao
            </button>

            </Content>
        </Container>
    )
}