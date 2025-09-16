import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { getOrders } from "../http";

const History = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [orders, setOrders] = useState<
    {
      order: {
        id: "";
        name: "";
        email: "";
        phone: "";
        address: "";
        createdAt: "";
        orderedFlower: [{ count: 0; flower: { id: ""; name: ""; price: 0 } }];
      };
      totalPrice: 0;
    }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderSubmit = async (e: any) => {
    e.preventDefault();

    const response = await getOrders({ ...formData });

    setOrders(response.data.data);
  };

  return (
    <Container>
      <Col>
        <Row>
          <Form onSubmit={handleOrderSubmit}>
            <Form.Group className="mb-3" controlId="orderForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="test@gmail.com"
                isValid
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <Row>
          {" "}
          <ListGroup>
            {orders.map((data) => (
              <ListGroup.Item key={data.order.id}>
                <Row className="mb-5">
                  <ListGroup>
                    {data.order.orderedFlower.map((flower) => (
                      <Col key={data.order.id + flower.flower.id}>
                        <ListGroupItem key={flower.flower.id}>
                          <p>
                            <b>{flower.flower.name}</b>
                          </p>
                          <p>
                            <b>{flower.flower.price}$</b>
                          </p>
                          <p>
                            <b>Count: {flower.count}</b>
                          </p>
                        </ListGroupItem>
                      </Col>
                    ))}
                  </ListGroup>
                  <Col>
                    <b>Total price: </b>
                    {data.totalPrice}
                    {"  "}
                    <b>Date: </b>
                    {new Date(data.order.createdAt).toLocaleTimeString()}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Col>
    </Container>
  );
};

export default History;
