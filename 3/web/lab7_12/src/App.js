import "./styles.css";
import React from "react";

class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.state = {
      platform: 0,
      country: 0,
      price: 0
    };
  }

  handleFormInput(platform, price, country) {
    this.setState({
      platform: platform,
      price: price,
      country: country
    });
  }

  render() {
    const products = [
      {
        name: "Diablo IV Deluxe Edition XBOX ONE SERIES X|S КЛЮЧ",
        price: 6064,
        platform: "Xbox",
        country: "США",
        uri: "https://www.digiseller.ru/preview/925824/p1_3750378_c3329487.jpg"
      },
      {
        name: "Cyberpunk 2077 XBOX ONE/SERIES X|S Ключ",
        price: 1099,
        platform: "Xbox",
        country: "Польша",
        uri: "//www.digiseller.ru/preview/316903/p1_3037310_2d6a6bd2.png"
      },
      {
        name: "STREET FIGHTER 6 DELUXE EDITION❤️XBOX X|S🔑КЛЮЧ",
        price: 5686,
        platform: "Xbox",
        country: "Япония",
        uri: "//www.digiseller.ru/preview/479276/p1_3672562_722fe732.jpg"
      },
      {
        name: "DIRT RALLY ✅(STEAM КЛЮЧ/GLOBAL)",
        price: 175,
        platform: "Steam",
        country: "Великобритания",
        uri: "https://habigames.ru/images/1/6/dirt-rally20-1.jpg"
      },
      {
        name: "🔴Euro Truck Simulator 2 Оригинальный Ключ Steam🔴",
        price: 297,
        plafrorm: "Steam",
        country: "Чехия",
        uri:
          "https://upload.wikimedia.org/wikipedia/ru/1/18/Euro_Truck_Simulator_2.jpg"
      },
      {
        name: "NBA 2K23 ✅(STEAM КЛЮЧ)+ПОДАРОК",
        price: 1999,
        platform: "Steam",
        country: "США",
        uri:
          "//assets.2k.com/1a6ngf98576c/4oCqsi6G8MfDjHKhjhBtrP/d43164117e00d78c0cf85dfafeb3b906/NBA23-WEBSITE-ATHLETE_HUB-MODULE1-STD_THUMBNAIL-828x828.jpg"
      },
      {
        name: "🔶Borderlands 3 Официальный Ключ Epic Store",
        price: 422,
        platform: "Epic Games",
        country: "США",
        uri: "//www.digiseller.ru/preview/118855/p1_2682818_9557e394.gif"
      },
      {
        name: "Atomic Heart (Steam)",
        price: 3190,
        platform: "Steam",
        country: "Россия",
        uri:
          "https://upload.wikimedia.org/wikipedia/ru/0/01/Atomic_Heart_Cover_Art.jpg"
      },
      {
        name: "🎮LOOP HERO🎮 XBOX ONE & SERIES X/S🔑КЛЮЧ",
        price: 733,
        platform: "Xbox",
        country: "Россия",
        uri:
          "https://gaminguardian.com/wp-content/uploads/2021/03/loop-hero-cover.jpg"
      }
    ];

    return (
      <div className="filter">
        <a style={{ textAlign: "right", fontSize: 36 }}>Ваш интернет-магазин</a>
        <MainFilterMenu
          platform={this.state.platform}
          price={this.state.price}
          onFormInput={this.handleFormInput}
        />
        <ProductFilterResults
          products={products}
          platform={this.state.platform}
          price={this.state.price}
          country={this.state.country}
        />
      </div>
    );
  }
}

//Меню с фильтрами
class MainFilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onFormInput(
      this.refs["platformInput"].value,
      this.refs["priceInput"].checked,
      this.refs["countryInput"].value
    );
    console.log(this.refs["countryInput"].value);
  }

  render() {
    return (
      <form className="filter-menu">
        <label form="priceInput">Сортировка по цене</label>
        <input
          id="priceInput"
          type="checkbox"
          checked={this.props.price}
          ref="priceInput"
          onChange={this.handleChange}
        />
        <label form="platformInput">Выбор платформы:</label>
        <select
          id="platformInput"
          ref="platformInput"
          onChange={this.handleChange}
        >
          <option value="All">Все платформы</option>
          <option value="Xbox">Xbox ONE | SERIES</option>
          <option value="Steam">Steam</option>
          <option value="Epic Games">Epic Games Store</option>
        </select>
        <label form="platformInput">Выбор страны:</label>
        <select
          id="countryInput"
          ref="countryInput"
          onChange={this.handleChange}
        >
          <option value="All">Все страны</option>
          <option value="Россия">Россия</option>
          <option value="США">США</option>
          <option value="Япония">Япония</option>
          <option value="Польша">Польша</option>
          <option value="Чехия">Чехия</option>
        </select>
      </form>
    );
  }
}

//Отфильтрованные результаты продуктов
class ProductFilterResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = [];

    if (this.props.price === true) {
      this.props.products.sort((a, b) => {
        return b.price - a.price;
      });
    }

    var intermediateResults = [];

    this.props.products.map((product) => {
      if (this.props.platform === 0 || this.props.platform === "All") {
        intermediateResults.push(product);
      } else if (product.platform === this.props.platform) {
        intermediateResults.push(product);
      }
    });

    intermediateResults.map((product) => {
      if (this.props.country === 0 || this.props.country === "All") {
        results.push(<Product product={product} />);
      } else if (product.country === this.props.country) {
        results.push(<Product product={product} />);
      }
    });

    return (
      <div className="filter-results">
        <ul className="blocks blocks_3up">{results}</ul>
      </div>
    );
  }
}

//Класс продукта
class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div className="feature">
          <div className="feature-hd">
            <h2 class="hdg hdg_2">{this.props.product.name}</h2>
          </div>
          <div className="feature-bd">
            <p>{this.props.product.platform}</p>
          </div>
          <div className="feature-image">
            <img src={this.props.product.uri} alt="new" />
          </div>
          <div className="feature-ft">
            <p>
              <b>{this.props.product.price} руб</b>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductFilter;
