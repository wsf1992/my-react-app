import Container from './container'

interface Props {
    className: string
}

function A(props: Props) {
    return (
        <div className={`flex flex-center ${props.className}`}>
            <Container></Container>
        </div>
    )
}
export default A
