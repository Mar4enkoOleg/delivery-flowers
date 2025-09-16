import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../http";
import { useEffect, useState } from "react";

const OrderDetails = () => {
  const { id } = useParams();

  const [orderDetail, setOrderDetails] = useState({
    data: {
      name: "",
      email: "",
      phone: "",
      address: "",
      createdAt: "",
      orderedFlower: [
        {
          count: 0,
          flowerId: 0,
          flower: {
            name: "",
            price: 0,
          },
        },
      ],
    },

    totalPrice: 0,
  });

  useEffect(() => {
    localStorage.removeItem("cart");

    try {
      getOrderDetails(id as string).then((res) => {
        setOrderDetails(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  return (
    <Container>
      <Col>
        <Row>
          <p>
            <b>Name: </b>
            {orderDetail.data.name}
          </p>
        </Row>
        <Row>
          <p>
            <b>Email: </b>
            {orderDetail.data.email}
          </p>
        </Row>
        <Row>
          <p>
            <b>Phone: </b>
            {orderDetail.data.phone}
          </p>
        </Row>
        <Row>
          <p>
            <b>Address: </b>
            {orderDetail.data.address}
          </p>
        </Row>
        <Row>
          <p>
            <b>Created: </b>
            {new Date(orderDetail.data.createdAt).toLocaleString()}
          </p>
        </Row>
      </Col>
      <Col>
        <ListGroup>
          {orderDetail.data.orderedFlower.map((flower) => (
            <ListGroupItem key={flower.flowerId}>
              <Row>
                <Col>
                  <p>Potencial image</p>
                </Col>
                <Col>
                  <p>
                    {" "}
                    <b>Flower name: </b>
                  </p>
                  {flower.flower.name}
                </Col>
                <Col>
                  <p>
                    <b>Flower price: </b>
                    {flower.flower.price}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Count: </b>
                    {flower.count}
                  </p>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <b>Total price: {orderDetail.totalPrice}</b>
      </Col>
    </Container>
  );
};

export default OrderDetails;
