import React from "react";

const PizzasAvailable = () => {
  return (
    <div>
      <Container className=" cartBox d-flex flex-column justify-content-center align-items-center">
        <h3
          style={{
            color: "#fff",
            textShadow: "0 0 10px #03bcf4",
            paddingBottom: "1rem",
          }}
        >
          Pizzas En Stock
        </h3>
        {pizzas.map((pizza) => (
          <Row
            key={pizza.id}
            className="mb-3 border p-3 rounded d-flex justify-content-between align-items-center"
          >
            <Col xs={12} md={12} lg={3}>
              <img
                src={pizza.img}
                alt={`Imagen de Pizza ${pizza.name}`}
                className="pizza-image"
              />
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h6>
                  {pizza.name} {""} ${pizza.price.toLocaleString()}
                </h6>
              </div>
            </Col>

            <Col
              xs={12}
              md={12}
              lg={4}
              className="d-flex justify-content-center align-items-center"
            >
              <button className="btn" onClick={() => handleClick(pizza)}>
                Agregar 🛒
              </button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default PizzasAvailable;
