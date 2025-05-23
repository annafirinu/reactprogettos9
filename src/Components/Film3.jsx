import { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const URL = "https://www.omdbapi.com/?apikey=abe0182f&s=Legion";

class Film3 extends Component {
  state = {
    film: [],
  };

  getFilm = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        console.log("Dati Film", data);
        this.setState({
          film: data.Search,
        });
      })
      .catch((err) => {
        console.log("errore", err);
        this.setState({});
      });
  };

  componentDidMount = () => {
    console.log("SONO COMPONENTDIDMOUNT");

    this.getFilm();
  };

  render() {
    console.log("SONO RENDER");

    return (
      <>
        <h2 className="ms-5 ps-4 mb-1 mt-3 text-white">Legion</h2>
        <Carousel className="m-3 ms-5 ps-4 d-none d-lg-block">
          <Carousel.Item>
            <div className="d-flex flex-wrap justify-content-between  d-lg-flex">
              {this.state.film.slice(0, 6).map((img, index) => (
                <div key={index} className="p-2" style={{ maxWidth: "16.6%" }}>
                  <img
                    className="d-block w-100"
                    src={img.Poster}
                    alt={`Image ${index + 1}`}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>

        <Carousel className="m-3 ms-5 ps-4 d-none d-lg-none d-md-block">
          <Carousel.Item>
            <div className="d-flex flex-wrap justify-content-between ">
              {this.state.film.slice(0, 3).map((img, index) => (
                <div key={index} className="p-2" style={{ maxWidth: "33%" }}>
                  <img
                    className="d-block w-100"
                    src={img.Poster}
                    alt={`Image ${index + 1}`}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>

        <Carousel className="m-3 ms-5 ps-4  d-lg-none d-md-none d-sx-block">
          <Carousel.Item>
            <div className="d-flex flex-wrap justify-content-center">
              {this.state.film.slice(0, 1).map((img, index) => (
                <div key={index} className="p-2" style={{ maxWidth: "99%" }}>
                  <img
                    className="d-block w-100 text-center"
                    src={img.Poster}
                    alt={`Image ${index + 1}`}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>

        {/*{this.state.film.map((info) => {
            return (
              <Carousel.Item key={info.imdbID}>
                <Row>
                  <Col sx={12} md={4} lg={2}>
                    <img
                      src={info.Poster}
                      className="w-100"
                      alt={"Poster di " + info.Titolo}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            );
          })}*/}
      </>
    );
  }
}

export default Film3;
