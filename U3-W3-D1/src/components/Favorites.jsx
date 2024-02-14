import { Button, Container, ListGroup, Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Favorites = () => {

    const favorites = useSelector((state) => state.favorites.content)
    const dispatch = useDispatch()

    return (
        <Container>
            <Row>
            <h1>Favourite Enterprises</h1>
            <ListGroup>
                {favorites.map((enterprise, i ) => {
                    return (
                        <ListGroup.Item>
                        <Link to={`/${enterprise.company_name}`} key={i}>{enterprise.company_name}</Link>
                        <Button  className="list-group-item" onClick={() => {
                            console.log("elimino l'azienda")
                            dispatch({
                                type: "REMOVE_ENTERPRISE",
                                payload: i //indice dell'azienda ---> così riesco a capire quale elemento eliminare
                            })
                        }}><i className="bi bi-trash"></i></Button>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
            </Row>
        </Container>
    )
}

export default Favorites
