import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => (
  <div className="error--404">
    404! NOT FOUND <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;