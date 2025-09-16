import {
  Col,
  Container,
  Row,
  Form,
  Button,
  ListGroup,
  ButtonGroup,
  CloseButton,
} from "react-bootstrap";
import { TFlowerWithCount } from "../types";
import { ERecountAction } from "../enums";
import { useState } from "react";
import {
  getFlowerCounter,
  getTotalPrice,
  parseCurrentLocalStorage,
  recountFlowersCount,
} from "../services/shopping-cart";
import { createOrder } from "../http";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [lsState = parseCurrentLocalStorage(), setLsState] =
    useState<TFlowerWithCount[]>();
  const navigate = useNavigate();

  // default data for quick test
  const [formData, setFormData] = useState({
    name: "test",
    email: "test@gmail.com",
    phone: "380999999999",
    address: "Ukraine, Kiyv",
  });

  const recount = (id: string, action: ERecountAction) => {
    recountFlowersCount(id, action);
    setLsState(parseCurrentLocalStorage());
  };

  const handleOrderSubmit = async () => {
    const flowers = lsState.map((element) => ({
      flowerId: element.id,
      count: element.count,
    }));

    const response = await createOrder({ ...formData, flowers });
    navigate(`/order-details/${response.data.id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleDeteteItem(id: string) {
    const filteredCart = parseCurrentLocalStorage().filter(
      (item) => item.id !== id
    );
    setLsState(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  }

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <Form onClick={handleOrderSubmit}>
              <Form.Group className="mb-3" controlId="orderForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="orderForm.ControlInput2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="orderForm.ControlInput3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="phone"
                  placeholder="380999999999"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="orderForm.ControlInput4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ukraine, Kyiv"
                />
              </Form.Group>
              <Button variant="primary" type="button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <ListGroup>
              {lsState.map((flower) => (
                <ListGroup.Item key={flower.id}>
                  <Container>
                    <Row className="mb-5">
                      <Col>
                        <b>Flower: </b>
                        {flower.name}
                      </Col>
                      <Col>
                        <b>Price: </b>
                        {flower.price}
                      </Col>
                      <Col>
                        <ButtonGroup aria-label="Counter buttons">
                          <Button
                            variant="danger"
                            onClick={() =>
                              recount(flower.id, ERecountAction.decrement)
                            }
                          >
                            -
                          </Button>
                          <Button variant="light" disabled>
                            {getFlowerCounter(flower.id)}
                          </Button>{" "}
                          <Button
                            variant="success"
                            onClick={() =>
                              recount(flower.id, ERecountAction.increment)
                            }
                          >
                            +
                          </Button>
                        </ButtonGroup>
                      </Col>
                      <Col>
                        <Container className="h-100 d-flex justify-content-end align-items-start">
                          <CloseButton
                            onClick={() => handleDeteteItem(flower.id)}
                          ></CloseButton>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6} className="text-center">
            <Container>
              <p>
                <b>Total price: </b>
                {getTotalPrice()}
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ShoppingCart;
