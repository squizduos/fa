import NavElement from "./NavElement";

import { useState } from 'react';

function Nav(props) {
    const [selectedCategory, setSelectedCategory] = useState("");

    // let categories = props.categories;
    // if (selectedCategory) {
    //     categories = categories.filter((category) => category === selectedCategory);
    // }
    // categories.push({
    //     name: "Всё",
    //     category: "",
    // })

    const categoriesRendered = props.categories.map(category => <NavElement name={category.name} category={category.category} key={category.category} />)
    return (
      <div className="d-flex flex-column flex-md-row align-items-center text-center justify-content-center pb-3 mb-4 border-bottom">
          <nav className="d-inline-flex mt-2 mt-md-0">
              <ul className="nav justify-content-center">
                  {categoriesRendered}

  
                  <li className="nav-item">
                    <a className="btn btn-danger" aria-current="page">
                    Всё
                    </a>
                </li>
                
              </ul>
          </nav>
      </div>
    );
  }

export default Nav;