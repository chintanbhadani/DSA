import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom";
import UseMemoDemo from "../Component/useMemo";
import UseCallbackDemo from "../Component/UseCallbackDemo/index.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/useMemo" element={<UseMemoDemo />} />
        <Route path="/useCallback" element={<UseCallbackDemo />} />
        <Route path="/" element={<UseMemoDemo />} />
      </ReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
