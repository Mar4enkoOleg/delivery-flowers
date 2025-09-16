import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { getFlowers, getShops } from "../http";
import { TFlowerData, TShop } from "../types";
import { ESortBy } from "../enums";

const Shop = () => {
  const [shops, setShops] = useState<TShop[]>();
  const [flowerData, setFlowersData] = useState<TFlowerData>();
  const [sortBy, setSortBy] = useState<ESortBy | undefined>();
  const [currentShopId, setCurrentShopId] = useState<string>("");

  useEffect(() => {
    try {
      getShops().then((res) => {
        setShops(res.data);

        res.data[0]?.id && setCurrentShopId(res.data[0].id);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleShopClick = async (id: string, sortBy?: ESortBy) => {
    const data = await getFlowers(id, sortBy);

    setCurrentShopId(id);

    setFlowersData(data.data);
  };

  const handleSortBy = async (eventKey: string | null) => {
    setSortBy(eventKey as ESortBy);

    const data = await getFlowers(currentShopId, eventKey as ESortBy);

    setFlowersData(data.data);
  };

  return (
    <Container>
      {" "}
      <Row>
        <Col md={2}>
          <ListGroup>
            {shops?.map((shop) => (
              <ListGroupItem
                key={shop.id}
                action
                onClick={() => handleShopClick(shop.id, sortBy)}
              >
                {shop.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col md={9}>
          <ListGroup>
            {flowerData?.flowers.map((flower) => (
              <ListGroupItem key={flower.id}>
                <Row>
                  <Col>
                    <p>Potencial image</p>
                  </Col>
                  <Col>
                    <b>Flower name: </b>
                    {flower.name}
                  </Col>
                  <Col>
                    <b>Flower price: </b>
                    {flower.price}
                  </Col>
                  <Col>
                    <b>Added time: </b>
                    {new Date(flower.createdAt).toLocaleDateString()}
                  </Col>
                  <Col>
                    <Button variant="outline-dark">Add to cart</Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col md={1}>
          <Dropdown onSelect={handleSortBy}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="" eventKey={ESortBy.byPrice}>
                price
              </Dropdown.Item>
              <Dropdown.Item href="" eventKey={ESortBy.byDate}>
                date
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
