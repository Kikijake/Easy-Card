import React from "react";

export const RndTest = React.lazy(() =>
  import("../pages/package_test/rnd.jsx")
);

export const ZoomingTest = React.lazy(() =>
  import("../pages/package_test/zooming.jsx")
);
