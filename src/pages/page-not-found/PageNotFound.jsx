import { React, useEffect } from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <div className="text-center">
      <div className="flex-row flex-center p-xl">
        <img src="page-not-found.png" alt="page not found" />
      </div>
      <p className="text-center text-lg">
        Can not open the page, this could be you or us.
      </p>
      <p className="text-center text-lg">Please try again later</p>

      <Link
        className="button button-primary large-btn m-xl text-md link-btn"
        to="../"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
