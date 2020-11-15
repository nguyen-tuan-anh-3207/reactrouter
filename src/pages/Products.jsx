import React,{Component} from 'react'
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {CartContext} from '../contexts/CartProvider'


class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [{
  "id": "9474d774-aa31-4c07-b1dd-6a3f5ee6d2a3",
  "name": "Cheese - Woolwich Goat, Log",
  "description": "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
  "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
}, {
  "id": "cdafc558-ffb5-40dd-a382-80a357520a4a",
  "name": "Squid - U - 10 Thailand",
  "description": "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse",
  "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
}, {
  "id": "9e4d3a33-af90-4a70-b610-eb27af77033c",
  "name": "Onions - Spanish",
  "description": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
  "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
}, {
  "id": "01095f88-3fcd-49ec-bb5b-f6f71fad5ae6",
  "name": "Lamb - Racks, Frenched",
  "description": "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
}, {
  "id": "de08a706-66a2-4c92-8791-1c5a182cb3c6",
  "name": "Ecolab Digiclean Mild Fm",
  "description": "ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
  "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
}, {
  "id": "e8846abd-9def-4225-ae6b-3aa548e3b3f3",
  "name": "Kellogs Special K Cereal",
  "description": "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
  "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
}, {
  "id": "f5a95647-8b38-4afa-9981-bbfb6c4866e7",
  "name": "Vinegar - Cider",
  "description": "nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
  "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
}, {
  "id": "417222ee-d97f-4fd1-b863-0a61f3e6d800",
  "name": "Wheat - Soft Kernal Of Wheat",
  "description": "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
  "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
}, {
  "id": "3adb9169-e027-443f-9b6d-b61ab5d89299",
  "name": "Shallots",
  "description": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
  "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
}, {
  "id": "d49a8977-598c-4ffa-bbfe-594c64072bfd",
  "name": "Pur Source",
  "description": "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
  "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
}, {
  "id": "9c6d7365-2b5b-4ff2-9211-257a7b173ed6",
  "name": "Wine - Magnotta, Merlot Sr Vqa",
  "description": "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
  "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
}, {
  "id": "fee0ba3a-20e2-4a4c-9802-c84b59771ad8",
  "name": "Vaccum Bag - 14x20",
  "description": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
  "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
}, {
  "id": "def592cd-cc4e-4871-bdf1-fb8b15c28a4d",
  "name": "Blouse / Shirt / Sweater",
  "description": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
  "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
}, {
  "id": "fa39d699-4cf8-4747-8135-f1903a2cd37d",
  "name": "Scallops - 10/20",
  "description": "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat",
  "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
}, {
  "id": "115083b3-1d3f-494e-868c-0818197e366e",
  "name": "Paper Cocktail Umberlla 80 - 180",
  "description": "proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at",
  "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
}, {
  "id": "46a7b430-a678-43da-9d29-1f0bd6403ddc",
  "name": "Pork - Side Ribs",
  "description": "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
}, {
  "id": "2c716a78-3667-44a9-ab49-a61ecf535979",
  "name": "Daikon Radish",
  "description": "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
  "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
}, {
  "id": "be6bf536-9bad-4ea7-a493-aecc7e48e9ef",
  "name": "Oil - Safflower",
  "description": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin",
  "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
}, {
  "id": "14342a54-260b-4462-9537-9eb2974f07d1",
  "name": "Sprouts Dikon",
  "description": "pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
  "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
}, {
  "id": "be07f21b-3291-48b2-aaaf-b5bf4763c6fe",
  "name": "Yogurt - Banana, 175 Gr",
  "description": "porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in",
  "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
}]
        }
    }
    render(){
    const {products} = this.state;
    return (
        <Container>
            <Row>
                {products.map(product =>(
            <Col sm="3">
            <Card>
                <CardImg top width="100%" src={product.imageUrl} />
                <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
                <CartContext.Consumer>
                  {({addToCart}) => <Button onClick={() => addToCart(product)}>Add To Cart</Button>}
                </CartContext.Consumer>
                </CardBody>
            </Card>
            </Col>
                ))}
            </Row>
        </Container>
    )
}}


export default Products

